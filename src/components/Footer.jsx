import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          Salviamo lo Stambecco e&apos; una campagna nazionale che unisce istituzioni, comunita&apos;
          locali e cittadinanza per tutelare una specie simbolica dell&apos;ecosistema alpino.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/manifesto">Manifesto</Link>
          <Link to="/comuni">Comuni aderenti</Link>
          <Link to="/aderisci-comune">Aderisci come Comune</Link>
          <Link to="/articoli">Articoli</Link>
          <Link to="/agisci">Agisci ora</Link>
        </div>

        <p className="footer-note">
          Lo stambecco non e&apos; un problema da abbattere. E&apos; un patrimonio italiano da proteggere.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
