import { Link } from 'react-router-dom';

function Manifesto() {
  return (
    <div className="manifesto-page">
      <section className="page-hero manifesto-hero">
        <h1>Manifesto per la tutela dello stambecco alpino</h1>
        <p className="manifesto-claim">
          Lo stambecco e&apos; stato salvato dall&apos;estinzione. L&apos;Italia non puo&apos; trasformarlo in un
          trofeo.
        </p>
      </section>

      <section className="manifesto-section">
        <h2>Perche&apos; nasce questa campagna</h2>
        <p>
          La campagna nasce dalla preoccupazione per l&apos;estensione della caccia allo stambecco
          alpino. Parliamo di una specie simbolica delle Alpi italiane, protagonista di un recupero
          storico dopo una fase vicina all&apos;estinzione. Per questo riteniamo necessario adottare una
          linea di prudenza, basata su responsabilita&apos; pubblica e valutazioni scientifiche.
        </p>
      </section>

      <section className="manifesto-section manifesto-section-soft">
        <h2>Cosa chiediamo</h2>
        <ul className="bullet-list">
          <li>Non estendere la caccia allo stambecco alpino</li>
          <li>Distinguere gestione faunistica e caccia trofeo</li>
          <li>Tutelare specie simboliche e biologicamente fragili</li>
          <li>Valorizzare turismo naturalistico</li>
          <li>Coinvolgere territori, Comuni, enti parco, comunita&apos; locali</li>
        </ul>
      </section>

      <section className="manifesto-section">
        <h2>Cosa non siamo</h2>
        <div className="manifesto-box-grid">
          <article className="manifesto-box">
            <p>Non siamo contro la montagna</p>
          </article>
          <article className="manifesto-box">
            <p>Non siamo contro le comunita&apos; rurali</p>
          </article>
          <article className="manifesto-box">
            <p>Non siamo contro ogni forma di gestione faunistica</p>
          </article>
          <article className="manifesto-box">
            <p>Non siamo una campagna ideologica</p>
          </article>
        </div>
      </section>

      <section className="manifesto-section manifesto-section-soft">
        <h2>Cosa siamo</h2>
        <div className="manifesto-tags">
          <span>Campagna conservazionista</span>
          <span>Scientifica</span>
          <span>Culturale</span>
          <span>Territoriale</span>
          <span>Istituzionale</span>
        </div>
      </section>

      <section className="manifesto-section">
        <h2>Il principio</h2>
        <p className="manifesto-principle">
          Una specie salvata dall&apos;estinzione non dovrebbe diventare bersaglio per finalita&apos; ludiche
          o simboliche. La gestione della fauna deve fondarsi su necessita&apos; ecologiche reali, dati
          trasparenti e responsabilita&apos; pubblica.
        </p>
      </section>

      <section className="manifesto-section manifesto-final-cta">
        <h2>Partecipa alla campagna</h2>
        <div className="hero-actions">
          <Link to="/aderisci-comune" className="cta-button">
            Aderisci come Comune
          </Link>
          <Link to="/agisci" className="cta-button cta-button-outline">
            Agisci ora
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Manifesto;
