import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const ACharacter = () => {
    const [Acharacters, setACharacters] = useState([]);
    const [colors, setColors] = useState([]);
    const [animes, setAnimes] = useState([]);

    var animeS = (document.getElementById("anime-select")as HTMLSelectElement);
    var hairC = (document.getElementById("hair-select")as HTMLSelectElement);
    var eyeC = (document.getElementById("eye-select")as HTMLSelectElement);
    var roleS = (document.getElementById("role-select")as HTMLSelectElement);
    var genderS = (document.getElementById("gender-select")as HTMLSelectElement);
    let maxPages = 10;
    let num = 1; 
    let number = [];
    
    useEffect(() => {
        fetch(`http://localhost:5000/api/Acharacters/AcharacterPages?page=${num}`)
        .then(respose => respose.json())
        .then(data => {            
            setACharacters(data.map((Acharacter: any) => (
            <div className="col-sm-3">
                <div>
                    <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={require("."+Acharacter.image)} alt=""/></Link>
                </div>
                <br/>
                <p>{Acharacter.fname} {Acharacter.lname}</p>
            </div>
            )));
        });
    },[]);
    
    useEffect(() => {
        fetch("http://localhost:5000/api/Acharacters/FindAllColors")
        .then(respose => respose.json())
        .then(data => {
            setColors(data.map((Acharacter: any) => (
              <option value={Acharacter.id}>{Acharacter.color}</option>
              )));
        });
    },[]);

    useEffect(() => {
    fetch("http://localhost:5000/api/Acharacters/FindAllAnimes")
    .then(respose => respose.json())
    .then(data => {
        setAnimes(data.map((Acharacter: any) => (
            <option value={Acharacter.anime}>{Acharacter.anime}</option>
            )));
        });
    },[]);

    const filterAnime = (event: any) => {
        console.log(animeS.value);
        
        fetch(`http://localhost:5000/api/Acharacters/FilterByAnime?anime=${animeS.value}`)
        .then(respose => respose.json())
        .then(data => {
            setACharacters(data.map((Acharacter: any) => (
                <div className="col-sm-3">
                    <div>
                    <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={require("."+Acharacter.image)} alt=""/></Link>
                    </div>
                    <br/>
                    <p>{Acharacter.fname} {Acharacter.lname}</p>
                </div>
            )));
        });
        event.preventDefault()
    }

    const filterEye = (event: any) => {
        fetch(`http://localhost:5000/api/Acharacters/FilterByEyeC?eyec=${eyeC.value}`)
        .then(respose => respose.json())
        .then(data => {
          setACharacters(data.map((Acharacter: any) => (
              <div className="col-sm-3">
                  <div>
                  <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={require("."+Acharacter.image)} alt=""/></Link>
                  </div>
                  <br/>
                  <p>{Acharacter.fname} {Acharacter.lname}</p>
              </div>
          )));
        });
    event.preventDefault()
    }

    const filterHair = (event: any) => {
        fetch(`http://localhost:5000/api/Acharacters/FilterByHairC?hairc=${hairC.value}`)
        .then(respose => respose.json())
        .then(data => {
        setACharacters(data.map((Acharacter: any) => (
            <div className="col-sm-3">
                <div>
                <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={require("."+Acharacter.image)} alt=""/></Link>
                </div>
                <br/>
                <p>{Acharacter.fname} {Acharacter.lname}</p>
            </div>
        )));
        });
    event.preventDefault()
    }

    const filterRole = (event: any) => {
        fetch(`http://localhost:5000/api/Acharacters/FilterByRole?role=${roleS.value}`)
        .then(respose => respose.json())
        .then(data => {
        setACharacters(data.map((Acharacter: any) => (
            <div className="col-sm-3">
                <div>
                <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={require("."+Acharacter.image)} alt=""/></Link>
                </div>
                <br/>
                <p>{Acharacter.fname} {Acharacter.lname}</p>
            </div>
        )));
        });
    event.preventDefault()
    }

    const filterGender = (event: any) => {
        fetch(`http://localhost:5000/api/Acharacters/FilterByGender?gender=${genderS.value}`)
        .then(respose => respose.json())
        .then(data => {
        setACharacters(data.map((Acharacter: any) => (
            <div className="col-sm-3">
                <div>
                <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={require("."+Acharacter.image)} alt=""/></Link>
                </div>
                <br/>
                <p>{Acharacter.fname} {Acharacter.lname}</p>
            </div>
        )));
        });
    event.preventDefault()
    }

    const filterAll = (event: any) => {
        console.log(`http://localhost:5000/api/Acharacters/FilterByAll?anime=${(animeS.value)}&eyec=${eyeC.value}&hairc=${hairC.value}&role=${roleS.value}&gender=${genderS.value}`);
        
        fetch(`http://localhost:5000/api/Acharacters/FilterByAll?anime=${animeS.value}&eyec=${eyeC.value}&hairc=${hairC.value}&role=${roleS.value}&gender=${genderS.value}`)
        .then(respose => respose.json())
        .then(data => {
        setACharacters(data.map((Acharacter: any) => (
            <div className="col-sm-3">
                <div>
                <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={require("."+Acharacter.image)} alt=""/></Link>
                </div>
                <br/>
                <p>{Acharacter.fname} {Acharacter.lname}</p>
            </div>
        )));
        });
    event.preventDefault()
    } 

    const page = (event: any) => {
        num = event
        console.log(num);
        
        fetch(`http://localhost:5000/api/Acharacters/AcharacterPages?id=${num}`)
        .then(respose => respose.json())
        .then(data => {
        setACharacters(data.map((Acharacter: any) => (
            <div className="col-sm-3">
                <div>
                    <Link to={`/find_Acharacter/${Acharacter.id}`}><img src={require("."+Acharacter.image)} alt=""/></Link>
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

                    <label htmlFor="role-select">select by chara. role:</label>
                    <select name="role" id="role-select">
                            <option value="">Please select option here</option>
                            <option value="Main">Main Character</option>
                            <option value="Side">Side Character</option>
                    </select>
                    <button onClick={filterRole}>filter</button>

                    <label htmlFor="gender-select">select by gender:</label>
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