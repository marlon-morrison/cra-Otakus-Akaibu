import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <header>
        <a name="top"></a>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-5 col-lg-5">
                    <h1>Otaku's Ākaibu</h1>
                </div>
                <div className="col-xs-12 col-sm-7 col-lg-7">
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/find_Acharacter">Find Character</Link>
                        <Link to="/fanart">Fanart</Link>
                        <Link to="/social">Social</Link>
                    </ul>
                </div>
            </div>
        </div> 
      </header>
    </div>
  );
}

export default Header;
