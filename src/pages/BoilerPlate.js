import React from 'react';
import {Link} from 'react-router-dom';

const BoilerPlate = () => {
  return <div>
          <p>
            Edit <code>src/App.js</code> and save to reload. <br/>
            Howdy y'all
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br/>
          <Link to='/landing'>Test Landing Thing</Link>
        </div>
};

export default BoilerPlate