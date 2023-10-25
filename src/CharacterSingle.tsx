import React , {useState, useEffect} from 'react';

const ACharacterSingle = (props) => {
    const [Acharacters, setAcharacters] = useState([]);

    useEffect(() => {
        const {id} = props.match.params
        console.log(id);
        
        fetch(`http://localhost:5000/api/Acharacters/anime/${id}`)
        .then(respose => respose.json())
        .then(data => {
            setAcharacters(data.map(character => (
                <>
                <div className="col-sm-4">
                    <h2>{character.fname} {character.lname}</h2>
                    <img src={character.image} className=" img-responsive" alt=""/>
                </div>
                <div className="col-sm-8">
                    <hr/>
                    <p>Age: {character.age}</p>
                    <hr/>
                    <p>Date of Birth: {character.dob}</p>
                    <hr/>
                    <p>Height: {character.height}ft</p>
                    <hr/>
                    <p>Gender: {character.gender}</p>
                    <hr/>
                    <p>Race: {character.race}</p>
                    <hr/>
                    <p>Role: {character.role}</p>
                    <hr/>
                    <p>Anime: {character.anime}</p>
                    <hr/>
                    <p>Hair Color: {character.hair_color}</p>
                    <hr/>
                    <p>Eye Color: {character.eye_color}</p>
                    <hr/>
                </div>
                </>
            ))); 
        });
    },[]);
  
    return (
      <main>
          <div className="container">
            <div className="row">
                <div className="col_sm_12">
                    <div className="row">
                        {Acharacters}
                    </div>
                </div>
            </div>
          </div>
      </main>
    );
}

export default ACharacterSingle;