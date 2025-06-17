import React from 'react';
import './Home.css';
import { GiSpinningSword, GiRank3, GiTrophy } from 'react-icons/gi';
import { MdOutlineUpdate, MdGroups } from 'react-icons/md';

function Home() {
  const heroStyle = {
    background: `url(${process.env.PUBLIC_URL}/images/kbg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: '#fff',
    padding: '50px 0'
  };

  return (
    <div className="home-screen">
      {/* Main Hero Section */}
      <div className="container-fluid hero-section" style={heroStyle}>
        <div className="row min-vh-100 align-items-center">
          <div className="col-12 text-content">
            <div className="content-wrapper">
              <h1 className="font-big slide-in-top">This Is Where</h1>
              <h1 className="font-big animate-charcter">Kara's Story Starts</h1>
              <p className="lead-text slide-in-bottom neon-text">
                Kara is the Queen of her Realm <br></br>
                Here you will find interesting stories about Kara and her adventures
              </p>
              
              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-primary explore-btn slide-in-bottom">
                  Contact Me
                </button>
                <button className="btn btn-outline-primary explore-btn slide-in-bottom">
                  More stories to come!
                </button>
              </div>

              <div className="countdown-box mt-4 slide-in-bottom">
                <h5 className="mb-2">Summary</h5>
                <div className="d-flex gap-2">
                  <div className="countdown-item">
                    <div>∞</div>
                    <small>Stories</small>
                  </div>
                  <div className="countdown-item">
                    <div>∞</div>
                    <small>Abilities</small>
                  </div>
                  <div className="countdown-item">
                    <div>∞</div>
                    <small>Creative Possibilities</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container-fluid features-section py-5">
        <div className="container">
        <div className="feature-slider">
  <div className="feature-card">
    <GiSpinningSword className="feature-icon" />
    <h4>Name: Kara</h4>
    <p>Title: Goddess of Mischief and Mayhem<br />
    Race: Norse God<br />
    Age: Claims to be 2,500 (but is much older)<br />
    Gender: Female</p>
  </div>

  <div className="feature-card">
    <GiRank3 className="feature-icon" />
    <h4>Appearance</h4>
    <p>Hair: Silver, long to her shoulders with a braid in the back<br />
    Eyes: Ruby red<br />
    Skin: Porcelain white with pink tones<br />
    Height: 5'10"<br />
    Weight: 165 lbs<br />
    Body Type: Athletic<br />
    Scar over her left eye</p>
  </div>

  <div className="feature-card">
    <MdGroups className="feature-icon" />
    <h4>Personality</h4>
    <p>Fun, sarcastic, witty, compassionate<br />
    Flirty, fiery-tempered</p>
  </div>

  <div className="feature-card">
    <GiTrophy className="feature-icon" />
    <h4>Likes & Dislikes</h4>
    <p>Likes: Pranks, mischief, cartoons, sweets<br />
    Dislikes: Dishonor, disloyalty, no sense of humor</p>
  </div>
</div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container-fluid newsletter-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <MdOutlineUpdate className="newsletter-icon mb-3" />
              <h2>Follow the creative journey</h2>
              <p className="sub-text">Get updates on new characters, work-in-progress, and exclusive reveals</p>
              
              <div className="newsletter-form mt-4">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email for art updates"
                />
                <button className="btn btn-primary mt-3">
                  Join the Adventure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="additional-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 text-center">
              <h2>Weapons</h2>
              <p className="sub-text">Weapons owned by Kara</p>
            </div>
            
            <div className="col-md-4">
              <div className="stats-card">
                <div className="stats-number">Armor</div>
                <div className="stats-label">Twin daggers forged from an ancient asteroid’s metal</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stats-card">
                <div className="stats-number">01</div>
                <div className="stats-label">Handcrafted by the Valkyries, said to be impenetrable</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stats-card">
                <div className="stats-number">Magic & Affinities</div>
                <div className="stats-label">Norse God mythology grants her vast magical abilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;