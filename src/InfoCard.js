
import React from 'react';

function InfoCard({ index, handleClick, info }) {
  return (
    <li id="list">
      <div className="img">
        <img src={info.picture.large} alt={`${info.name.first} ${info.name.last}'s profile`} />
      </div>
      <div className="name">
        {info.name.first} &nbsp;
        {info.name.last}
      </div>
      <div className="info">
        <span className={info.showDetails ? 'hidden' : 'visible'}>
          <button onClick={handleClick}>
            {info.showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </span><br />
        {info.showDetails && (
          <span>
            <span id="location">City: {info.location.city} <br /></span>
            <span id="email">{info.email}<br /></span>
            <span id="age">Age: {info.dob.age} &nbsp; &nbsp; &nbsp;</span><br />
            
          </span>
        )}
      </div>
    </li>
  );
}

export default InfoCard;
