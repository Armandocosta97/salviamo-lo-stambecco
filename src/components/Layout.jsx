import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
