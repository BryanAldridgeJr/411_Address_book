import React, { useState, useEffect } from 'react';
import './App.css';
import InfoCard from './InfoCard';

function App() {
  const [arrayOfInfo, setArrayOfInfo] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api?results=25')
      .then(response => response.json())
      .then(data => setArrayOfInfo(data.results));
  }, []);

  const handleClick = (index) => {
    setArrayOfInfo((prevArray) => {
      const updatedInfo = prevArray.map((info, i) =>
        i === index ? { ...info, showDetails: !info.showDetails } : info
      );
      return updatedInfo;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <ol>
          {arrayOfInfo.map((info, index) => (
            <InfoCard
              key={index}
              index={index}
              info={info}
              handleClick={() => handleClick(index)}
            />
          ))}
        </ol>
      </header>
    </div>
  );
}

export default App;

/*
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [arrayOfInfo, setArrayOfInfo] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api?results=25')
      .then(response => response.json())
      .then(data => setArrayOfInfo(data.results));
  }, []);

  const handleClick = (index) => {
    setArrayOfInfo((prevArray) => {
      const updatedInfo = prevArray.map((info, i) =>
        i === index ? { ...info, showDetails: !info.showDetails } : info
      );
      return updatedInfo;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <ol>
          {arrayOfInfo.map((info, index) => (
            <li key={index} id="list">
              <div className="img">
                <img src={info.picture.thumbnail} alt={`${info.name.first} ${info.name.last}'s profile picture`} />
              </div>
              <div className="name">
                {info.name.first} &nbsp;
                {info.name.last}
              </div>
              <div className="info">
                <span className={info.showDetails ? 'hidden' : 'visible'}>
                  <button onClick={() => handleClick(index)}>
                    {info.showDetails ? 'Hide Details' : 'Show Details'}
                  </button>
                </span>
                {info.showDetails && (
                  <span>
                    <span id="location">City: {info.location.city} <br /></span>
                    <span id="email">{info.email}<br /></span>
                    <span id="age">Age: {info.dob.age} &nbsp; &nbsp; &nbsp;</span>
                    <span className="like">
                      <button onClick={() => handleClick(index)}>
                        Hide Details
                      </button>
                      {info.showDetails && <p>{info.details}</p>}
                    </span>
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </header>
    </div>
  );
}

export default App;*/


