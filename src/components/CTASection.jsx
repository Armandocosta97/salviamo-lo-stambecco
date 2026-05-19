import { Link } from 'react-router-dom';

function CTASection({ title, description, buttonLabel, buttonTo = '/agisci' }) {
  return (
    <section className="cta-section" aria-label="Invito all'azione">
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <Link to={buttonTo} className="cta-button">
        {buttonLabel}
      </Link>
    </section>
  );
}

export default CTASection;
