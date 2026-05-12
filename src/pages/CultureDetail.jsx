import { useParams, Link } from "react-router-dom";
import cultures from "../data/cultures";

function CultureDetail() {
  const { id } = useParams();
  const culture = cultures.find((item) => item.id === parseInt(id));

  if (!culture) {
    return <h1>Data tidak ditemukan</h1>;
  }

  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cultures">Cultures</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="card justify">
        <h1>{culture.name}</h1>
        <ul className="detail-list">
          <li><b>Daerah:</b> {culture.region}</li>
          <li><b>Kategori:</b> {culture.category}</li>
        </ul>
        <p>{culture.description}</p>
      </div>
    </div>
  );
}

export default CultureDetail;