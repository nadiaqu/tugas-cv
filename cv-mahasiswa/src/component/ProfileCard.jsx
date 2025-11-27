import React from 'react';
import data from '../data/dataMahasiswa.json';

const ProfileCard = () => {
  const { full_name, headline, location, prodi, photo_url, portfolio_url } = data.profile;

  const bannerUrl = "https://i.pinimg.com/1200x/54/2b/37/542b374a2598445c02579c0fd0a27285.jpg"; 

  return (
    <div className="card profile-card">
      {/* Banner Image */}
      <div className="banner" style={{ backgroundImage: `url(${bannerUrl})` }}></div>
      
      <div className="profile-content">
        {/* Foto Profil (Numpuk ke atas) */}
        <img src={photo_url} alt={full_name} className="profile-pic" />
        
        {/* Info Utama */}
        <div className="profile-info">
          <h1 className="name">{full_name}</h1>
          <p className="headline">{headline}</p>
          
          <div className="sub-info">
            <span className="location text-muted">{location}</span>
            <span className="dot">•</span>
            <span className="contact-info text-primary">Contact info</span>
          </div>

          <p className="education-preview text-muted">Student at {prodi}</p>

          {/* Tombol Action */}
          <div className="action-buttons">
            <a href={portfolio_url} target="_blank" className="btn btn-primary">Open to work</a>
            <button className="btn btn-outline">More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;