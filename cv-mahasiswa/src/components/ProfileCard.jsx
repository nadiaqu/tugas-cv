import React from 'react';
import data from '../data/dataMahasiswa.json';

const ProfileCard = () => {
  const { full_name, headline, location, photo_url, portfolio_url } = data.profile;

  return (
    <div className="card">
      <div className="banner"></div>
      
      <div className="profile-content">
        <img src={photo_url} alt={full_name} className="profile-pic" />
        
        <h1 className="name">{full_name}</h1>
        <p className="headline">{headline}</p>
        <h4 className="location">{location}</h4>
        <br></br>
        
        <div className="action-buttons">
          <a href={portfolio_url} target="_blank" className="btn btn-primary">Portofolio</a>
          <button className="btn btn-outline">More</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;