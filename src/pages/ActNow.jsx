import { useState } from 'react';

const emailComune = `Oggetto: Adesione del Comune alla campagna Salviamo lo Stambecco

Gentile Sindaco/a,
gentili Amministratori,

vi scrivo per chiedere che il Comune valuti l’adesione alla campagna Salviamo lo Stambecco, nata per promuovere la tutela dello stambecco alpino come patrimonio naturale, culturale e identitario delle Alpi italiane.

La campagna non si pone in termini ideologici né contro la caccia in generale, ma chiede prudenza rispetto all’estensione della caccia a una specie simbolica, non invasiva e storicamente salvata dall’estinzione anche grazie all’impegno dei territori alpini.

Aderire significa prendere una posizione pubblica a favore della biodiversità alpina, del turismo naturalistico e di una gestione della fauna fondata su criteri scientifici.

Vi chiedo quindi di valutare una dichiarazione pubblica, una mozione o una delibera di adesione.

Cordiali saluti,
[NOME]`;

const emailParlamentari = `Oggetto: Richiesta di posizione pubblica sulla tutela dello stambecco alpino

Gentile Onorevole / Gentile Consigliere,

con questa comunicazione chiedo una presa di posizione pubblica contro l’estensione della caccia allo stambecco alpino.

La richiesta nasce da un criterio di prudenza istituzionale: lo stambecco è una specie simbolica delle Alpi italiane, biologicamente delicata e legata a ecosistemi già esposti a forti pressioni ambientali.

Non si tratta di una posizione ideologica né contraria alla caccia in generale, ma di una valutazione specifica sulla tutela di una specie che rappresenta un patrimonio naturale e culturale nazionale.

Confido nella Sua attenzione e nella promozione di atti coerenti con una gestione della fauna fondata su criteri scientifici e responsabilità pubblica.

Cordiali saluti,
[NOME]`;

const socialTemplates = [
  {
    type: 'Emotivo',
    text: 'Lo stambecco è tornato sulle nostre montagne dopo una storia difficile. Proteggerlo oggi è una responsabilità collettiva. #SalviamoLoStambecco',
  },
  {
    type: 'Istituzionale',
    text: 'Chiediamo una scelta pubblica prudente: no all’estensione della caccia allo stambecco alpino, sì a gestione scientifica e tutela della biodiversità. #SalviamoLoStambecco',
  },
  {
    type: 'Turistico/Naturalistico',
    text: 'Uno stambecco vivo vale paesaggio, educazione ambientale e turismo responsabile per le comunità alpine. #SalviamoLoStambecco',
  },
];

const quickActions = [
  {
    title: 'Scrivi al tuo Comune',
    description:
      'Invia una richiesta formale per promuovere adesione pubblica, mozione o delibera a tutela dello stambecco alpino.',
    button: 'Copia testo',
    value: emailComune,
  },
  {
    title: 'Scrivi a parlamentari e consiglieri regionali',
    description:
      'Sollecita una presa di posizione istituzionale contro l’estensione della caccia allo stambecco.',
    button: 'Copia testo',
    value: emailParlamentari,
  },
  {
    title: 'Coinvolgi CAI, rifugi e guide alpine',
    description:
      'Attiva reti locali che possono sostenere la campagna con comunicazioni pubbliche e iniziative territoriali.',
    button: 'Leggi template',
    value:
      'Proponiamo a CAI, rifugi e guide alpine di diffondere una nota comune sulla tutela dello stambecco come patrimonio vivo delle montagne italiane.',
  },
  {
    title: 'Condividi la campagna',
    description:
      'Usa un messaggio breve e chiaro per ampliare la partecipazione di cittadini, associazioni e amministratori.',
    button: 'Leggi template',
    value:
      'Partecipa a Salviamo lo Stambecco: una campagna civile e scientifica per proteggere una specie simbolica delle Alpi italiane.',
  },
];

function ActNow() {
  const [copiedMessage, setCopiedMessage] = useState('');

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessage('Testo copiato');
      window.setTimeout(() => setCopiedMessage(''), 1800);
    } catch {
      setCopiedMessage('Copia non disponibile in questo browser');
      window.setTimeout(() => setCopiedMessage(''), 2200);
    }
  };

  return (
    <div className="act-page">
      <section className="page-hero act-hero">
        <h1>Agisci ora</h1>
        <p className="page-subtitle">
          Una campagna funziona quando diventa semplice partecipare. Scrivi, condividi, coinvolgi
          il tuo territorio.
        </p>
      </section>

      <section className="act-section">
        <h2>Azioni rapide</h2>
        <div className="act-grid">
          {quickActions.map((item) => (
            <article key={item.title} className="act-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button type="button" className="cta-button" onClick={() => copyToClipboard(item.value)}>
                {item.button}
              </button>
            </article>
          ))}
        </div>
        {copiedMessage ? <p className="copy-feedback">{copiedMessage}</p> : null}
      </section>

      <section className="act-section act-section-soft">
        <h2>Template email al Comune</h2>
        <pre className="template-box">{emailComune}</pre>
        <button type="button" className="cta-button" onClick={() => copyToClipboard(emailComune)}>
          Copia testo
        </button>
      </section>

      <section className="act-section">
        <h2>Template email parlamentari</h2>
        <pre className="template-box">{emailParlamentari}</pre>
        <button
          type="button"
          className="cta-button"
          onClick={() => copyToClipboard(emailParlamentari)}
        >
          Copia testo
        </button>
      </section>

      <section className="act-section act-section-soft">
        <h2>Template social</h2>
        <div className="social-grid">
          {socialTemplates.map((item) => (
            <article key={item.type} className="social-card">
              <h3>{item.type}</h3>
              <p>{item.text}</p>
              <button type="button" className="cta-button" onClick={() => copyToClipboard(item.text)}>
                Copia testo
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ActNow;
