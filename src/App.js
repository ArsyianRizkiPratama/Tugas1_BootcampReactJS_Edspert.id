import "./style.css";
import logo from "./image/A.png";
import hero from "./image/arsyian.png";

function App() {
  return (
    <div>
      <nav>
        <div className="wrapper">
            <div className="logo"><a href="#beranda"><img src ={logo}/>ARSYIAN</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Beranda</a></li>
                    <li><a href="#Selamat_Datang">Tentang Saya</a></li>
                    <li><a href="#keahlian">Keahlian</a></li>
                    <li><a href="#portofolio">Portofolio</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div className="bagian0">
        <div className="wrapper">
            <div className="home">
                <section id="home">
                <img src={hero}/>
    
                <div className="kolom">
                    <h2> Selamat Datang</h2>
                    <p className="deskripsi"> Saya Arsyian Rizki Pratama. Saya merupakan mahasiswa Fisika Sistem dan Instrumentasi Universitas Indonesia. Saat ini saya bekerja selain sebagai mahasiswa saya juga bekerja sebagai tutor online di Jakarta Coding.</p>
                    <p> <a href="" className="tbl-1">Pelajari Lebih Lanjut</a></p>
                </div>
                </section>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
