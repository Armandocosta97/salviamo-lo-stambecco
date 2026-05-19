import { Link, useParams } from 'react-router-dom';
import { articles } from '../data/articles';

function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="page-hero">
        <h1>Articolo non trovato</h1>
        <p className="page-subtitle">
          Il contenuto richiesto non e\' disponibile. Puoi tornare all&apos;elenco degli articoli.
        </p>
        <div className="section">
          <Link className="cta-button" to="/articoli">
            Vai ad Articoli
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="page-hero article-detail">
      <p className="eyebrow">{article.heroLabel}</p>
      <h1>{article.title}</h1>
      <p className="article-meta article-meta-single">
        <span>{article.category}</span>
        <span>{article.readingTime}</span>
      </p>
      <p className="page-subtitle">{article.excerpt}</p>

      <div className="section article-content">
        {article.contentSections.map((section) => (
          <section key={section.heading} className="article-section">
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>

      <div className="section">
        <Link to="/agisci" className="cta-button">
          Agisci ora
        </Link>
      </div>
    </article>
  );
}

export default ArticleDetail;
