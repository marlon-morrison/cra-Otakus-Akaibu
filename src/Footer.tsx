import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container outsites">
        <div className="row">
          <div className="col-sm-4">
            <h3>anime streaming sites</h3>
            <hr/>
            <ul>
              <li><a target="_blank" href="https://www.funimation.com/">funimation</a></li>
              <li><a target="_blank" href="https://www.crunchyroll.com/">crunchyroll</a></li>
              <li><a target="_blank" href="https://vrv.co/">VRV</a></li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h3>anime info sites</h3>
            <hr/>
            <ul>
              <li><a target="_blank" href="https://myanimelist.net/">myanimelist</a></li>
              <li><a target="_blank" href="https://manga.tokyo/">manga.tokyo</a></li>
              <li><a target="_blank" href="https://www.anime-planet.com/">anime planet</a></li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h3>anime accessory sites</h3>
            <hr/>
            <ul>
              <li><a target="_blank" href="https://akibento.com/">akibento</a></li>
              <li><a target="_blank" href="https://www.aniplexplus.com/">aniplexplus</a></li>
              <li><a target="_blank" href="https://www.kotobukiya.co.jp/">kotobukiya</a></li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-md-10  col-lg-10">
              <Link to="/"><a href="#top">Otaku's Ākaibu</a></Link>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
              <a href="#top"> &uarr; back to top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
