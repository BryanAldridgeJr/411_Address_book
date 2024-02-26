
import React from 'react';

function InfoCard({ index, handleClick, info }) {
  return (
    <li id="list">
      <div className="img">
        <img src={info.picture.thumbnail} alt={`${info.name.first} ${info.name.last}'s profile picture`} />
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
        </span>
        {info.showDetails && (
          <span>
            <span id="location">City: {info.location.city} <br /></span>
            <span id="email">{info.email}<br /></span>
            <span id="age">Age: {info.dob.age} &nbsp; &nbsp; &nbsp;</span>
            <span className="like">
              <button onClick={handleClick}>
                Hide Details
              </button>
              {info.showDetails && <p>{info.details}</p>}
            </span>
          </span>
        )}
      </div>
    </li>
  );
}

export default InfoCard;
