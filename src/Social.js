import React , {useState, useEffect} from 'react';

const Social = () => {
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        fetch(`http://api.jikan.moe/v3/anime/1/reviews/7`)
        .then(respose => respose.json())
        .then(data => {
            console.log(data.reviews);
            
          setCharacters(data.reviews.map(person => (
            <div class="row">
                <div class="col-sm-12 comment">
                    <img src="/media/mr-anonymous.png" alt=""/>
                    <h3>anonymous</h3>
                    <p>{person.content}</p>
                    <hr/>
                </div>
            </div>
          )));
        });
    },[]);

  return (
    <div className="Social">
         <main>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2>social</h2>
                    {characters}
                </div>
            </div>
        </div>
    </main>
    </div>
  );
}

export default Social;