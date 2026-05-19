import { Link } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { municipalities } from '../data/municipalities';

const mapCenter = [46.1, 9.2];

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const statusLabels = {
  demo: 'Demo',
  aderente: 'Aderente',
  in_valutazione: 'In valutazione',
};

function MapPage() {
  return (
    <section className="page-hero map-page">
      <h1>I Comuni che stanno dalla parte dello stambecco</h1>
      <p className="page-subtitle">
        La mappa raccoglie i territori coinvolti nella campagna e offre uno strumento di
        consultazione trasparente per cittadinanza, enti locali e amministratori.
      </p>

      <div className="map-notice" role="note" aria-label="Avviso dati demo">
        <strong>Avviso:</strong> La mappa e&apos; predisposta per ospitare i Comuni aderenti. I dati
        iniziali sono dimostrativi.
      </div>

      <div className="map-wrapper" aria-label="Mappa Comuni demo e in valutazione">
        <MapContainer center={mapCenter} zoom={7} scrollWheelZoom={false} className="leaflet-map">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {municipalities.map((municipality) => (
            <Marker key={municipality.id} position={[municipality.lat, municipality.lng]}>
              <Popup>
                <strong>{municipality.name}</strong>
                <br />
                {municipality.province} - {municipality.region}
                <br />
                Stato: {statusLabels[municipality.status] || municipality.status}
                <br />
                {municipality.statement}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="section municipalities-grid">
        {municipalities.map((municipality) => (
          <article key={municipality.id} className="municipality-card">
            <h2>{municipality.name}</h2>
            <p className="municipality-meta">
              {municipality.province} - {municipality.region}
            </p>
            <p>
              <strong>Stato:</strong> {statusLabels[municipality.status] || municipality.status}
            </p>
            <p>
              <strong>Data:</strong> {municipality.joinedAt}
            </p>
            <p>{municipality.statement}</p>
            <p>
              <a href={municipality.documentUrl} aria-disabled="true">
                Documento (demo)
              </a>
            </p>
          </article>
        ))}
      </div>

      <div className="section">
        <Link className="cta-button" to="/aderisci-comune">
          Aderisci come Comune
        </Link>
      </div>
    </section>
  );
}

export default MapPage;
