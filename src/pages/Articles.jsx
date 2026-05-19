import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

function Articles() {
  return (
    <section className="page-hero">
      <p className="eyebrow">Approfondimenti</p>
      <h1>Articoli e analisi</h1>
      <p className="page-subtitle">
        Una raccolta divulgativa sui temi chiave della campagna: conservazione dello stambecco,
        fragilita\' degli ecosistemi alpini e responsabilita\' delle istituzioni territoriali.
      </p>

      <div className="section articles-grid">
        {articles.map((article) => (
          <article key={article.slug} className="article-card">
            <p className="article-meta">
              <span>{article.category}</span>
              <span>{article.readingTime}</span>
            </p>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <Link className="text-link" to={`/articoli/${article.slug}`}>
              Leggi l&apos;articolo
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Articles;
