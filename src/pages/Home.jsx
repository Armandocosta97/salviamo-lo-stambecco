import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const petitionUrl = 'https://tally.so/r/ob5NjO';

const positioningCards = [
  {
    title: 'Conservazione',
    text: 'Proteggere una specie simbolica e biologicamente sensibile significa rafforzare la qualita\' della gestione faunistica nazionale.',
  },
  {
    title: 'Territori',
    text: 'Comuni, aree protette e comunita\' montane sono attori decisivi per mantenere equilibrio ecologico, presidio e coesione locale.',
  },
  {
    title: 'Responsabilita\' istituzionale',
    text: 'Le scelte pubbliche devono essere coerenti con dati scientifici, interesse collettivo e tutela di lungo periodo della biodiversita\'.',
  },
];

const urgencyPoints = [
  'E\' in discussione una possibile estensione normativa che renderebbe cacciabile lo stambecco alpino.',
  'Lo stambecco alpino e\' stato a lungo vicino all\'estinzione.',
  'La sua sopravvivenza e\' stata resa possibile anche dal ruolo storico del Gran Paradiso.',
  'Oggi rischia di essere trattato come trofeo, con una scelta che indebolisce il valore della sua tutela.',
  'La biodiversita\' alpina e\' fragile: va gestita con prudenza, metodo e visione.',
];

const actionItems = [
  'Scrivi al tuo Comune per chiedere una presa di posizione pubblica.',
  'Condividi la campagna con associazioni, scuole e reti territoriali.',
  'Contatta parlamentari e amministratori per sostenere una scelta responsabile.',
];

const defaultMetrics = {
  lastUpdated: '2026-05-19',
  stats: {
    signatures: 18420,
    municipalities: 74,
    organizations: 39,
  },
};

function formatNumber(value) {
  return new Intl.NumberFormat('it-IT').format(value);
}

function Home() {
  const [metrics, setMetrics] = useState(defaultMetrics);

  useEffect(() => {
    let isMounted = true;

    async function loadMetrics() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/campaign-metrics.json`, {
          cache: 'no-store',
        });

        if (!response.ok) {
          return;
        }

        const payload = await response.json();
        if (!isMounted || !payload?.stats) {
          return;
        }

        setMetrics({
          lastUpdated: payload.lastUpdated || defaultMetrics.lastUpdated,
          stats: {
            signatures: Number(payload.stats.signatures) || defaultMetrics.stats.signatures,
            municipalities:
              Number(payload.stats.municipalities) || defaultMetrics.stats.municipalities,
            organizations: Number(payload.stats.organizations) || defaultMetrics.stats.organizations,
          },
        });
      } catch {
        // Keep fallback values if metrics file is unavailable.
      }
    }

    loadMetrics();
    return () => {
      isMounted = false;
    };
  }, []);

  const dashboardStats = useMemo(() => {
    const items = [
      { label: 'Firme raccolte', value: metrics.stats.signatures },
      { label: 'Comuni coinvolti', value: metrics.stats.municipalities },
      { label: 'Enti e organizzazioni', value: metrics.stats.organizations },
    ];

    const maxValue = Math.max(...items.map((item) => item.value), 1);

    return items.map((item) => ({
      ...item,
      bar: Math.max(10, Math.round((item.value / maxValue) * 100)),
      formattedValue: formatNumber(item.value),
    }));
  }, [metrics]);

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-inner">
          <p className="eyebrow">Campagna nazionale per la tutela dello stambecco alpino</p>
          <h1>Lo stambecco non e&apos; un trofeo</h1>
          <p className="home-subheadline">
            Dopo essere stato salvato dall&apos;estinzione, oggi rischia di diventare una specie
            cacciabile. Chiediamo che lo stambecco alpino resti un simbolo vivo delle Alpi italiane.
          </p>
          <div className="hero-actions">
            <a href={petitionUrl} className="cta-button" target="_blank" rel="noreferrer">
              Firma l&apos;appello
            </a>
            <Link to="/aderisci-comune" className="cta-button cta-button-outline">
              Aderisci come Comune
            </Link>
            <Link to="/manifesto" className="text-link">
              Scopri il manifesto
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2>Una campagna scientifica, territoriale, non ideologica</h2>
        <p className="section-intro">
          La campagna non e&apos; contro la caccia in generale. E&apos; contraria all&apos;estensione della
          caccia a specie simboliche, non invasive e biologicamente fragili, per le quali servono
          criteri di massima cautela.
        </p>
        <div className="info-grid">
          {positioningCards.map((card) => (
            <article key={card.title} className="info-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section dashboard-section" aria-label="Dashboard campagna">
        <div className="dashboard-head">
          <h2>Partecipazione alla campagna</h2>
          <p className="section-intro">
            Quadro sintetico delle adesioni raccolte. I valori sono aggiornabili con i dati ufficiali
            della campagna.
          </p>
          <p className="dashboard-updated">Ultimo aggiornamento: {metrics.lastUpdated}</p>
        </div>

        <div className="dashboard-grid">
          {dashboardStats.map((item) => (
            <article key={item.label} className="dashboard-card">
              <p className="dashboard-value">{item.formattedValue}</p>
              <p className="dashboard-label">{item.label}</p>
              <div
                className="dashboard-bar"
                role="img"
                aria-label={`${item.label}: ${item.formattedValue}`}
              >
                <span style={{ width: `${item.bar}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-section-soft">
        <h2>Perche&apos; ora</h2>
        <ul className="bullet-list">
          {urgencyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="home-section">
        <h2>I Comuni che stanno dalla parte dello stambecco</h2>
        <p className="section-intro">
          Ogni Comune aderente diventa un presidio pubblico per la tutela dello stambecco e della
          biodiversita&apos; alpina.
        </p>
        <Link to="/comuni" className="cta-button">
          Vai alla mappa
        </Link>
      </section>

      <section className="home-section home-section-soft">
        <h2>Puoi agire oggi</h2>
        <div className="action-grid">
          {actionItems.map((item) => (
            <article key={item} className="action-card">
              <p>{item}</p>
            </article>
          ))}
        </div>
        <Link to="/agisci" className="cta-button">
          Agisci ora
        </Link>
      </section>

      <section className="home-closing">
        <p>Lo abbiamo salvato dall&apos;estinzione. Non lasciamo che diventi un bersaglio.</p>
      </section>
    </div>
  );
}

export default Home;
