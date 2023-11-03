import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ACharacterSingle = () => { 
    const {id} = useParams();
    const [Acharacters, setAcharacters] = useState([]);

    useEffect(() => {
        console.log(id);
        
        fetch(`http://localhost:5000/api/Acharacters/FindById?id=${id}`)
        .then(respose => respose.json())
        .then(data => {
            setAcharacters(data.map((character: any) => (
                <>
                <div className="col-sm-4">
                    <h2>{character.fname} {character.lname}</h2>
                    <img src={require("."+character.image)} className=" img-responsive" alt=""/>
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
                    <p>Role: {character.roles}</p>
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