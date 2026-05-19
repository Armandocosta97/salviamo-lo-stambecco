import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import MapPage from './pages/MapPage';
import JoinMunicipality from './pages/JoinMunicipality';
import ActNow from './pages/ActNow';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/comuni" element={<MapPage />} />
        <Route path="/aderisci-comune" element={<JoinMunicipality />} />
        <Route path="/agisci" element={<ActNow />} />
        <Route path="/articoli" element={<Articles />} />
        <Route path="/articoli/:slug" element={<ArticleDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
