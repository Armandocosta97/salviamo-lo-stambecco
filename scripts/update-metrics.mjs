import { readFile, writeFile } from 'node:fs/promises';

const API_KEY = process.env.TALLY_API_KEY;
const FORM_ID = process.env.TALLY_FORM_ID;
const METRICS_PATH = 'public/data/campaign-metrics.json';

if (!API_KEY || !FORM_ID) {
  throw new Error('Missing required env vars: TALLY_API_KEY and/or TALLY_FORM_ID');
}

const response = await fetch(`https://api.tally.so/forms/${FORM_ID}`, {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

if (!response.ok) {
  const details = await response.text();
  throw new Error(`Tally API error (${response.status}): ${details}`);
}

const form = await response.json();
const signatureCount = Number(form?.numberOfSubmissions ?? 0);

const rawMetrics = await readFile(METRICS_PATH, 'utf8');
const metrics = JSON.parse(rawMetrics);

const now = new Date();
const isoDate = now.toISOString().slice(0, 10);

metrics.lastUpdated = isoDate;
metrics.stats = {
  ...metrics.stats,
  signatures: signatureCount,
};

// Optional overrides from GitHub Secrets/Variables if you want full automation.
if (process.env.CAMPAIGN_MUNICIPALITIES) {
  metrics.stats.municipalities = Number(process.env.CAMPAIGN_MUNICIPALITIES);
}
if (process.env.CAMPAIGN_ORGANIZATIONS) {
  metrics.stats.organizations = Number(process.env.CAMPAIGN_ORGANIZATIONS);
}

await writeFile(METRICS_PATH, `${JSON.stringify(metrics, null, 2)}\n`, 'utf8');

console.log(`Updated metrics: signatures=${signatureCount}, lastUpdated=${isoDate}`);
