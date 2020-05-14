import React , {useState, useEffect} from 'react';

const Fanart = () => {
    const [fanart, setFanart] = useState([]);
    const [Acharacters, setCharacters] = useState([]);
    const [animes, setAnimes] = useState([]);
    
    let rank = document.getElementById("rank-select");
    let animeS = document.getElementById("anime-select")
    let characterS = document.getElementById("character-select")
    let maxPages = 10;
    let num = 1;
    let number = [];

    useEffect(() => {
        fetch(`http://localhost:5000/api/Acharacters/fanart/page/${num}`)
        .then(respose => respose.json())
        .then(data => {
            setFanart(data.map(character => (
                <div className="col-sm-5 col-md-4 col-lg-3">
                    <a href={character.fanart} target="_blank" ><img src={character.fanart} alt=""/></a>
                </div>
            )));
        });
    },[]);

    useEffect(() => {
        fetch("http://localhost:5000/api/Acharacters")
        .then(respose => respose.json())
        .then(data => {
            setCharacters(data.map(character => (
            <option value={character.id}>{character.fname} {character.lname}</option>
            )));
        });
    },[]);
  
    useEffect(() => {
        fetch("http://localhost:5000/api/Acharacters/animes")
        .then(respose => respose.json())
        .then(data => {
            setAnimes(data.map(character => (
                <option value={character.anime}>{character.anime}</option>
            )));
        });
    },[]);
  
    const filterAnime = event => {
        console.log(animeS.value);
        fetch(`http://localhost:5000/api/Acharacters/fanart/anime/${animeS.value}`)
        .then(respose => respose.json())
        .then(data => {
            setFanart(data.map(character => (
                <div className="col-sm-3">
                    <div>
                        <a href={character.fanart} target="_blank" ><img src={character.fanart} alt=""/></a>
                    </div>
                </div>
            )));
        });
        event.preventDefault()
    }

    const filterCharacters = event => {
        fetch(`http://localhost:5000/api/Acharacters/fanart/Acharacter/${characterS.value}`)
        .then(respose => respose.json())
        .then(data => {
            setFanart(data.map(character => (
                <div className="col-sm-3">
                    <div>
                        <a href={character.fanart} target="_blank" ><img src={character.fanart} alt=""/></a>
                    </div>
                </div>
            )));
        });   
    }

    const filterRank = event => {
        if (rank.value == "non-sort"){
            fetch("http://localhost:5000/api/Acharacters/fanart")
            .then(respose => respose.json())
            .then(data => {
                setFanart(data.map(character => (
                    <div className="col-sm-3">
                        <div>
                            <a href={character.fanart} target="_blank" ><img src={character.fanart} alt=""/></a>
                        </div>
                    </div>
                )));
               });
        }
        if (rank.value == "sort") {
            fetch("http://localhost:5000/api/Acharacters/fanart/rank")
            .then(respose => respose.json())
            .then(data => {
                setFanart(data.map(character => (
                    <div className="col-sm-3">
                        <div>
                            <a href={character.fanart} target="_blank" ><img src={character.fanart} alt=""/></a>
                        </div>
                    </div>
                )));
               });
        }
    }

    const page = event => {
        num = event
        fetch(`http://localhost:5000/api/Acharacters/fanart/page/${num}`)
        .then(respose => respose.json())
        .then(data => {
            setFanart(data.map(character => (
                <div className="col-sm-5 col-md-4 col-lg-3">
                    <a href={character.fanart} target="_blank" ><img src={character.fanart} alt=""/></a>
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
        <div class="container">
            <div class="row">
                <h2>fanart select</h2>
                <div class="col-sm-12 select">
                    <label for="anime-select">select by anime:</label>
                    <select name="animes" id="anime-select">
                        <option value="">Please select option here</option>
                        {animes}
                    </select>
                    <button onClick={filterAnime}>filter</button>
                    <label for="character-select">select by character:</label>
                    <select name="character" id="character-select">
                        <option value="">Please select option here</option>
                        {Acharacters}
                    </select>
                    <button onClick={filterCharacters}>filter</button>
                    <br/>
                    <label for="rank-select">select by rank:</label>
                    <select name="rank" id="rank-select">
                        <option value="">Please select option here</option>
                        <option value="non-sort">non-rank</option>
                        <option value="sort">rank</option>
                    </select>
                    <button onClick={filterRank}>filter</button>
                    <hr/>
                </div>
            </div>
            <div class="profile">
                <div class="container">
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