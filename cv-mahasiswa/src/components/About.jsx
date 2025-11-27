import React from 'react';
import data from '../data/dataMahasiswa.json';

const About = () => {
  return (
    <div className="card section-padding">
      <h2 className="section-title">About</h2>
      <p className="about-text">
        {data.profile.short_bio}
        <br/><br/>
        Based in {data.profile.location}.
      </p>
    </div>
  );
};

export default About;