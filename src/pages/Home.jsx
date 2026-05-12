import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cultures">Cultures</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>EduCulture Journey</h1>
      <div className="justify">
        <p>
          EduCulture Journey adalah website edukasi budaya Indonesia yang
          dirancang untuk membantu masyarakat mengenal lebih dekat berbagai
          kekayaan budaya Nusantara. Website ini menyediakan informasi mengenai
          tarian tradisional, rumah adat, makanan khas daerah, dan berbagai
          budaya unik dari seluruh Indonesia.
        </p>

        <p>
          Melalui platform ini, pengguna dapat menjelajahi berbagai budaya
          berdasarkan daerah asalnya serta melihat detail informasi budaya secara
          lebih lengkap. Aplikasi ini dibuat menggunakan React JS dengan konsep
          frontend routing dan state management sebagai implementasi pembelajaran
          pengembangan website modern.
        </p>
        
        <p>
          EduCulture Journey juga bertujuan untuk meningkatkan rasa cinta budaya
          Indonesia di kalangan generasi muda dengan menghadirkan tampilan
          website yang sederhana, interaktif, dan mudah digunakan.
        </p>
      </div>
    </div>
  );
}

export default Home;
