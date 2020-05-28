import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const ACharacter = () => {
    const [Acharacters, setACharacters] = useState([]);
    const [colors, setColors] = useState([]);
    const [animes, setAnimes] = useState([]);

    let animeS = document.getElementById("anime-select")
    let hairC = document.getElementById("hair-select")
    let eyeC = document.getElementById("eye-select")
    let roleS = document.getElementById("role-select")
    let genderS = document.getElementById("gender-select")
    let maxPages = 10;
    let num = 1;
    let number = [];
    
    useEffect(() => {
        fetch(`http://localhost:5000/api/Acharacters/page/${num}`)
        .then(respose => respose.json())
        .then(data => {
          setACharacters(data.map(Acharacter => (
            <div className="col-sm-3">
                <div>
                    <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={Acharacter.image} alt=""/></Link>
                </div>
                <br/>
                <p>{Acharacter.fname} {Acharacter.lname}</p>
            </div>
        )));
    });
    },[]);
    
    useEffect(() => {
        fetch("http://localhost:5000/api/Acharacters/colors")
        .then(respose => respose.json())
        .then(data => {
            setColors(data.map(Acharacter => (
              <option value={Acharacter.id}>{Acharacter.color}</option>
              )));
        });
    },[]);

    useEffect(() => {
    fetch("http://localhost:5000/api/Acharacters/animes")
    .then(respose => respose.json())
    .then(data => {
        setAnimes(data.map(Acharacter => (
            <option value={Acharacter.anime}>{Acharacter.anime}</option>
            )));
        });
    },[]);

    const filterAnime = event => {
        fetch(`http://localhost:5000/api/Acharacters/filter/anime/${animeS.value}`)
        .then(respose => respose.json())
        .then(data => {
            setACharacters(data.map(Acharacter => (
                <div className="col-sm-3">
                    <div>
                    <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={Acharacter.image} alt=""/></Link>
                    </div>
                    <br/>
                    <p>{Acharacter.fname} {Acharacter.lname}</p>
                </div>
            )));
        });
        event.preventDefault()
    }

    const filterEye = event => {
        fetch(`http://localhost:5000/api/Acharacters/filter/eye-color/${eyeC.value}`)
        .then(respose => respose.json())
        .then(data => {
          setACharacters(data.map(Acharacter => (
              <div className="col-sm-3">
                  <div>
                  <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={Acharacter.image} alt=""/></Link>
                  </div>
                  <br/>
                  <p>{Acharacter.fname} {Acharacter.lname}</p>
              </div>
          )));
        });
    event.preventDefault()
    }

    const filterHair = event => {
        fetch(`http://localhost:5000/api/Acharacters/filter/hair-color/${hairC.value}`)
        .then(respose => respose.json())
        .then(data => {
        setACharacters(data.map(Acharacter => (
            <div className="col-sm-3">
                <div>
                <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={Acharacter.image} alt=""/></Link>
                </div>
                <br/>
                <p>{Acharacter.fname} {Acharacter.lname}</p>
            </div>
        )));
        });
    event.preventDefault()
    }

    const filterRole = event => {
        fetch(`http://localhost:5000/api/Acharacters/filter/role/${roleS.value}`)
        .then(respose => respose.json())
        .then(data => {
        setACharacters(data.map(Acharacter => (
            <div className="col-sm-3">
                <div>
                <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={Acharacter.image} alt=""/></Link>
                </div>
                <br/>
                <p>{Acharacter.fname} {Acharacter.lname}</p>
            </div>
        )));
        });
    event.preventDefault()
    }

    const filterGender = event => {
        fetch(`http://localhost:5000/api/Acharacters/filter/gender/${genderS.value}`)
        .then(respose => respose.json())
        .then(data => {
        setACharacters(data.map(Acharacter => (
            <div className="col-sm-3">
                <div>
                <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={Acharacter.image} alt=""/></Link>
                </div>
                <br/>
                <p>{Acharacter.fname} {Acharacter.lname}</p>
            </div>
        )));
        });
    event.preventDefault()
    }

    const filterAll = event => {
        fetch(`http://localhost:5000/api/Acharacters/filter/all/${animeS.value}/${eyeC.value}/${hairC.value}/${roleS.value}/${genderS.value}`)
        .then(respose => respose.json())
        .then(data => {
        setACharacters(data.map(Acharacter => (
            <div className="col-sm-3">
                <div>
                <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={Acharacter.image} alt=""/></Link>
                </div>
                <br/>
                <p>{Acharacter.fname} {Acharacter.lname}</p>
            </div>
        )));
        });
    event.preventDefault()
    } 

    const page = event => {
        num = event
        console.log(num);
        
        fetch(`http://localhost:5000/api/Acharacters/page/${num}`)
        .then(respose => respose.json())
        .then(data => {
        setACharacters(data.map(Acharacter => (
            <div className="col-sm-3">
                <div>
                    <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={Acharacter.image} alt=""/></Link>
                </div>
                <br/>
                <p>{Acharacter.fname} {Acharacter.lname}</p>
            </div>
        )));
        });
    }

    for (let i = 1; i <= maxPages; i++) {
        number.push(
            <div className="space num" onClick={()=>{page(i)}} ><a href="#top">{i}</a></div>
        );
    }

    const paginationRender = (
        <>
            <div className="next">
                {number}
            </div>
        </>
    );

    return (
    <div className="ACharacter">
        <main>
        <div className="container">
            <div className="row">
                <h2>character select</h2>
                <div className="col-sm-12 select">
                    <label htmlFor="anime-select">select by anime:</label>
                    <select name="animes" id="anime-select">
                            <option value="">Please select option here</option>
                            {animes}
                    </select>
                    <button onClick={filterAnime}>filter</button>

                    <label htmlFor="hair-select">select by hair color:</label>
                    <select name="hair" id="hair-select">
                            <option value="">Please select option here</option>
                            {colors}
                    </select>
                    <button onClick={filterHair}>filter</button>
                    <br/>
                    <label htmlFor="eye-select">select by eye color:</label>
                    <select name="eye" id="eye-select">
                            <option value="">Please select option here</option>
                            {colors}
                    </select>
                    <button onClick={filterEye}>filter</button>

                    <label for="role-select">select by chara. role:</label>
                    <select name="role" id="role-select">
                            <option value="">Please select option here</option>
                            <option value="Main Character">Main Character</option>
                            <option value="Side Character">Side Character</option>
                    </select>
                    <button onClick={filterRole}>filter</button>

                    <label for="gender-select">select by gender:</label>
                    <select name="gender" id="gender-select">
                            <option value="">Please select option here</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">other</option>
                    </select>
                    <button onClick={filterGender}>filter</button>
                    <br/>
                    <button onClick={filterAll}>filter through all</button>
                    <hr/>
                </div>
            </div>
            <div className="row profile">
                <div className="col-sm-12">
                    <div className="slider">
                        <div className="slides">
                            {Acharacters}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagination-section">
                {paginationRender}
            </div>
        </div>
    </main>
    </div>
  );
}

export default ACharacter;