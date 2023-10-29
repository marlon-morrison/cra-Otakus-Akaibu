import React , {useState, useEffect} from 'react';


const About = () => {
  const [comments, setComments] = useState([]);

  let commentE= document.getElementById('commentS')


  useEffect(() => {
    fetch(`http://localhost:5000/api/Acharacters/comments/all`)
    .then(respose => respose.json())
    .then(data => {
      setComments(data.map((comment: any) => (
        <div className="row">
          <div className="col-sm-12 comment">
            <img src="/media/mr-anonymous.png" alt=""/>
            <h3>anonymous</h3>
            <p>{comment.response}</p>
            <hr/>
          </div>
        </div>
      )));
    });
  },[]);

  const addComment = event => {
    console.log(commentE.value);
    
    fetch(`http://localhost:5000/api/Acharacters/comments/create/${commentE.value}`, {method: 'POST'})
    .then(respose => respose.json())
    .then(data => {
      console.log(data);
    });
    window.location.reload();
  }

  return (
    <div className="About">
     <main>
        <div className="container">
          <div className="row">
              <div className="col-sm-12">
                  <h2>about</h2>
                  <p>Welcome to Otaku's Ākaibu in life all men are not created equal. Some are born swifter afoot, some with greater beauty. Some are born into poverty and others are born sick and feeble. Both in birth and in upbringing, in sheer scope of ability, every human is inherently different! Yes, that is why people disagree against one another, which is why there is struggle, competition, and the unfaltering march of progress! But in these times of progress people still have things in common! This place here was made so that all people of anime can come together in times of isolation, to find the character that they want to know the most about. So here is a website to find your favorite anime character to fanart. Also stop by the social page to look at more people like you and have fun.</p>
                  <p>If you think of any ideas for me to improve my wedsite please comment down below.</p>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12">
                  <textarea name="" id='commentS' cols="30" rows="11"></textarea>
                  <button onClick={addComment}>submit</button>
              </div>
          </div>
          {comments}
        </div>
    </main>
    </div>
  );
}

export default About;
