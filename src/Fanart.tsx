import React , {useState, useEffect} from 'react';

const Fanart = () => {
    const [fanart, setFanart] = useState([]);
    const [Acharacters, setCharacters] = useState([]);
    const [animes, setAnimes] = useState([]);

    var rank = (document.getElementById('rank-select') as HTMLSelectElement);

    let animeS = (document.getElementById("anime-select") as HTMLSelectElement);
    let characterS = (document.getElementById("character-select") as HTMLSelectElement);
    let maxPages = 10;
    let num = 1;
    let number = [];

    useEffect(() => { 
        fetch(`http://localhost:5000/api/Acharacters/FanartPages?page=${num}`)
        .then(respose => respose.json())
        .then(data => {
            setFanart(data.map((character: any) => (
                <div className="col-sm-5 col-md-4 col-lg-3">
                    <a href={character.fanart} target="_blank" ><img src={require("."+character.fanart)} alt=""/></a>
                </div>
            )));
        });
    },[]);

    useEffect(() => {
        fetch("http://localhost:5000/api/Acharacters/FindAll")
        .then(respose => respose.json())
        .then(data => {
            setCharacters(data.map((character: any) => (
            <option value={character.id}>{character.fname} {character.lname}</option>
            )));
        });
    },[]);
  
    useEffect(() => {
        fetch("http://localhost:5000/api/Acharacters/FindAllAnimes")
        .then(respose => respose.json())
        .then(data => {
            setAnimes(data.map((character: any) => (
                <option value={character.anime}>{character.anime}</option>
            )));
        });
    },[]);
  
    const filterAnime = (event: { preventDefault: () => void; }) => {
        console.log(animeS);
        fetch(`http://localhost:5000/api/Acharacters/FilterByAnimeF?anime=${animeS.value}`)
        .then(respose => respose.json())
        .then(data => {
            setFanart(data.map((character: any) => (
                <div className="col-sm-3">
                    <div>
                        <a href={character.fanart} target="_blank" ><img src={require("."+character.fanart)} alt=""/></a>
                    </div>
                </div>
            )));
        });
        event.preventDefault()
    }

    const filterCharacters = (event: any) => {
        fetch(`http://localhost:5000/api/Acharacters/FilterByACharacter?id=${characterS.value}`)
        .then(respose => respose.json())
        .then(data => {
            setFanart(data.map((character: any) => (
                <div className="col-sm-3">
                    <div>
                        <a href={character.fanart} target="_blank" ><img src={require("."+character.fanart)} alt=""/></a>
                    </div>
                </div>
            )));
        });   
    }

    const filterRank = (event: any) => {
        if (rank.value == "non-sort"){
            fetch("http://localhost:5000/api/Acharacters/FanartPages?page=1")
            .then(respose => respose.json())
            .then(data => {
                setFanart(data.map((character: any) => (
                    <div className="col-sm-3">
                        <div>
                            <a href={character.fanart} target="_blank" ><img src={require("."+character.fanart)} alt=""/></a>
                        </div>
                    </div>
                )));
               });
        }
        if (rank.value == "sort") {
            fetch("http://localhost:5000/api/Acharacters/FilterByRank")
            .then(respose => respose.json())
            .then(data => {
                setFanart(data.map((character: any) => (
                    <div className="col-sm-3">
                        <div> 
                            <a href={character.fanart} target="_blank" ><img src={require("."+character.fanart)} alt=""/></a>
                        </div>
                    </div>
                )));
               });
        }
    }

    const page = (event: number) => {
        num = event
        fetch(`http://localhost:5000/api/Acharacters/FanartPages?page=${num}`)
        .then(respose => respose.json())
        .then(data => {
            setFanart(data.map((character: any) => (
                <div className="col-sm-5 col-md-4 col-lg-3">
                    <a href={character.fanart} target="_blank" ><img src={require("."+character.fanart)} alt=""/></a>
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
        <div className="flex-container">
          <div className="next">
                {number}
          </div>
        </div>
    );

  return (
    <div className="Fanart">
            <main>
        <div className="container">
            <div className="row">
                <h2>fanart select</h2>
                <div className="col-sm-12 select">
                    <label htmlFor="anime-select">select by anime:</label>
                    <select name="animes" id="anime-select">
                        <option value="">Please select option here</option>
                        {animes}
                    </select>
                    <button onClick={filterAnime}>filter</button>
                    <label htmlFor="character-select">select by character:</label>
                    <select name="character" id="character-select">
                        <option value="">Please select option here</option>
                        {Acharacters}
                    </select>
                    <button onClick={filterCharacters}>filter</button>
                    <br/>
                    <label htmlFor="rank-select">select by rank:</label>
                    <select name="rank" id="rank-select">
                        <option value="">Please select option here</option>
                        <option value="non-sort">non-rank</option>
                        <option value="sort">rank</option>
                    </select>
                    <button onClick={filterRank}>filter</button>
                    <hr/>
                </div>
            </div>
            <div className="profile">
                <div className="container">
                    <div className="row slider">
                        <div className="slides">
                            {fanart}
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

export default Fanart;