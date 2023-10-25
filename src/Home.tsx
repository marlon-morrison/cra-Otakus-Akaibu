import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [Acharacters, setCharacters] = useState([]);
  const [fanart, setFanart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Acharacters/top/Acharacter")
    .then(respose => respose.json())
    .then(data => {
      setCharacters(data.map(character => (
          <div className="top col-sm-4">
            <h1 className="rankNum">{character.ranks}</h1>
            <div>
                <Link to={`/find_Acharacter/${character.id}`}><img src={character.image} alt=""/></Link>
            </div>
            <br/>
            <p>{character.fname} {character.lname}</p>
          </div>
      )));
    });
  },[]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Acharacters/top/fanart")
    .then(respose => respose.json())
    .then(data => {
        setFanart(data.map(character => (
          <div className="top col-sm-5 col-md-4 col-lg-4">
            <h1 className="rankNum">{character.ranks}</h1>
            <a href={character.fanart} target="_blank" ><img src={character.fanart} alt=""/></a>
          </div>
        )));
    });
},[]);

  return (
    <div className="Home">
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 border">
              <img src="media/hero.jpg" className="hidden-xs img-responsive" alt=""/>
              <div className="info">
                  <p>Knowing you’re different is only the beginning.</p>
                  <button><Link to="/find_Acharacter">Find Character</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="row">
            <h2>top viewed characters</h2>
            <div className="slider">
              <div className="slides">
                {Acharacters}
              </div>
            </div>
          </div>
          <div className="row">
            <h2>top viewed fanart</h2>
            <div className="slider">
              <div className="slides">
                {fanart}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
