import { useState } from 'react';

const declarationTemplate =
  'Il Comune di [NOME COMUNE] aderisce alla campagna Salviamo lo Stambecco, riconoscendo lo stambecco alpino come patrimonio naturale, culturale e identitario delle Alpi italiane. L\'adesione intende promuovere una gestione della fauna fondata su criteri scientifici, prudenza conservazionistica e valorizzazione del turismo naturalistico.';

function JoinMunicipality() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = 'Grazie. Il form definitivo sara\' attivato a breve.';
    setFeedback(message);
    window.alert(message);
  };

  return (
    <div className="join-page">
      <section className="page-hero join-hero">
        <h1>Aderisci come Comune</h1>
        <p className="page-subtitle">
          Ogni Comune aderente diventa un presidio pubblico per la tutela dello stambecco alpino e
          della biodiversita\' delle nostre montagne.
        </p>
      </section>

      <section className="join-section">
        <h2>Perche\' aderire</h2>
        <div className="join-grid">
          <article className="join-card">
            <h3>Tutela di una specie simbolica</h3>
            <p>
              Lo stambecco alpino rappresenta un patrimonio naturale riconosciuto e contribuisce alla
              qualita\' ecologica dei paesaggi montani.
            </p>
          </article>
          <article className="join-card">
            <h3>Difesa dell&apos;identita\' alpina</h3>
            <p>
              Sostenere la campagna significa affermare una visione territoriale che valorizza storia,
              cultura e responsabilita\' verso le generazioni future.
            </p>
          </article>
          <article className="join-card">
            <h3>Valorizzazione del turismo naturalistico</h3>
            <p>
              La presenza dello stambecco vivo rafforza l&apos;attrattivita\' dei territori alpini,
              sostenendo una fruizione rispettosa e duratura.
            </p>
          </article>
          <article className="join-card">
            <h3>Posizione civile e non ideologica</h3>
            <p>
              L&apos;adesione esprime una scelta istituzionale equilibrata: non contro la caccia in
              generale, ma per una prudenza specifica su una specie fragile e simbolica.
            </p>
          </article>
        </div>
      </section>

      <section className="join-section join-section-soft">
        <h2>Cosa comporta l&apos;adesione</h2>
        <ul className="bullet-list">
          <li>Inserimento nella mappa dei Comuni aderenti</li>
          <li>Pubblicazione di una dichiarazione ufficiale</li>
          <li>Eventuale delibera o mozione scaricabile</li>
          <li>Possibilita\' di ricevere materiali comunicativi</li>
        </ul>
      </section>

      <section className="join-section">
        <h2>Testo suggerito per dichiarazione pubblica</h2>
        <div className="declaration-box" aria-label="Testo copiabile">
          <p>{declarationTemplate}</p>
        </div>
      </section>

      <section className="join-section join-section-soft">
        <h2>Richiesta di adesione</h2>
        <form className="join-form" onSubmit={handleSubmit}>
          <label>
            Nome Comune
            <input type="text" name="municipalityName" required />
          </label>
          <label>
            Provincia
            <input type="text" name="province" required />
          </label>
          <label>
            Regione
            <input type="text" name="region" required />
          </label>
          <label>
            Nome referente
            <input type="text" name="contactName" required />
          </label>
          <label>
            Ruolo
            <input type="text" name="role" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Telefono
            <input type="tel" name="phone" />
          </label>
          <label className="join-form-full">
            Messaggio / dichiarazione
            <textarea name="statement" rows="5" />
          </label>
          <label className="join-form-full">
            Upload delibera o mozione
            <input type="file" name="document" disabled />
          </label>
          <div className="join-form-full">
            <button type="submit" className="cta-button">
              Invia richiesta di adesione
            </button>
          </div>
        </form>

        <p className="form-note">
          Il form e&apos; in fase di attivazione. Nel frattempo puoi scrivere a:{' '}
          <a href="mailto:info@salviamolostambecco.it">info@salviamolostambecco.it</a>
        </p>

        {feedback ? <p className="form-feedback">{feedback}</p> : null}
      </section>

      <section className="join-section join-final-cta">
        <h2>Materiali per il Consiglio Comunale</h2>
        <p>
          E&apos; in preparazione una bozza istituzionale pronta per essere adattata al contesto del tuo
          ente locale.
        </p>
        <a className="cta-button cta-button-disabled" href="#" aria-disabled="true">
          Scarica la bozza di mozione comunale
        </a>
      </section>
    </div>
  );
}

export default JoinMunicipality;
