import { Link } from "react-router-dom";
import { useState } from "react";
import cultures from "../data/cultures";

function Cultures() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (culture) => {
    setFavorites([...favorites, culture.name]);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cultures">Cultures</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Daftar Budaya</h1>
      <h3>Favorit: {favorites.length}</h3>
      {cultures.map((culture) => (
        <div className="card" key={culture.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
          <div style={{ textAlign: 'left', flex: 1 }}>
            <h2>{culture.name}</h2>
            <p><b>Daerah:</b> {culture.region}</p>
            <p><b>Kategori:</b> {culture.category}</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
            <Link className="btn" to={`/cultures/${culture.id}`}>
              Detail
            </Link>
            <button className="btn" onClick={() => addFavorite(culture)}>
              Tambah Favorit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cultures;