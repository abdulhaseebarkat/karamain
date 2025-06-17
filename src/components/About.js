import React from 'react';
import './About.css';
import { GiSpiralArrow, GiStoneBlock, GiSpellBook, GiStarMedal } from 'react-icons/gi';
import { MdGroups, MdOutlineAutoAwesome } from 'react-icons/md';

function About() {
  return (
    <div className="about-screen">
      /* Hero Section */  
        <div className="container-fluid py-5 d-flex align-items-center min-vh-100">
          <div className="container">
            <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 order-lg-1 order-2">
            <div className="content-wrapper">
              <h1 className="font-big text-red slide-in-top">
            About 
            <span className="animate-charcter"> KARA</span>
              </h1>
              <div className="gold-bar mb-4 slide-in-bottom"></div>
              <p className='lead-text slide-in-bottom'>
              Title: Goddess of Mischief and Mayhem<br />
              Race: Norse God<br />
              Faction: Mythos<br />
              Height: 5'10"<br />
              Eyes: Ruby Red<br />
              Hair: Silver (formerly red), worn shoulder-length with a back braid<br />
              Notable Mark: Scar over her left eye
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-2 order-1 mb-5 mb-lg-0">
            <img 
              className="img-fluid floating-animation" 
              src="../images/bg-image.png" 
              alt="World Building Illustration" 
            />
          </div>
            </div>
          </div>
        </div>

        {/* Core Pillars Section */}
      <div className="container-fluid pillars-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5 slide-in-bottom">KARA'S REALM</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="pillar-card slide-in-bottom">
                <GiSpiralArrow className="pillar-icon" />
                <h3>Boundless Creativity
                </h3>
                <p>Reality is just a suggestion. Kara bends the rules of existence, crafting worlds where imagination knows no limits.
                </p>
                <div className="pillar-number">01</div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pillar-card slide-in-bottom">
                <GiStoneBlock className="pillar-icon" />
                <h3>Legends Forged in Chaos</h3>
                <p>Every tale carries weight, every trick a purpose. Kara’s legacy is written in mischief, battle, and the echoes of gods long forgotten.
                </p>
                <div className="pillar-number">02</div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pillar-card slide-in-bottom">
                <MdGroups className="pillar-icon" />
                <h3>A Realm of Many Voices</h3>
                <p>Greatness is never built alone. Here, ideas collide, evolve, and reshape the fabric of myth itself.

Step into Kara’s domain—where the line between legend and reality is as thin as the edge of her blade.
                </p>
                <div className="pillar-number">03</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Origin Story */}
      <div className="container-fluid origin-section py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="story-card slide-in-bottom">
                <GiSpellBook className="story-icon" />
                <h2 className="mb-4">From Whispers to Legends
                </h2>
                <p className="lead">
                What started as a spark in the dark—fleeting ideas, scattered notes, whispered dreams—has ignited 
                into an ever-expanding mythos. Each tale, each moment, weaves into something greater: a living, 
                breathing legend.
                </p>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-year">2015</div>
                    <div className="timeline-content">The First Echoes: The earliest sketches emerged, shaping the foundation of something extraordinary.</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2018</div>
                    <div className="timeline-content">The Birth of a Myth: Kara’s world took form, its lore deepening, its legends taking root.</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2022</div>
                    <div className="timeline-content">The Realm Awakens: A growing community stepped into the story, turning myth into movement.

The journey is far from over. The legend is still being written. Will you be part of it?</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                className="img-fluid rounded-3" 
                src="../images/creation-process.jpg" 
                alt="Creative Process" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container-fluid values-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 text-center mb-5">
              <h2 className="slide-in-bottom">Why We Create</h2>
            </div>
            <div className="col-md-6">
              <div className="value-card slide-in-bottom">
                <MdOutlineAutoAwesome className="value-icon" />
                <div>
                  <h3>Spark Wonder</h3>
                  <p>Ignite that childhood sense of limitless possibility</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="value-card slide-in-bottom">
                <GiStarMedal className="value-icon" />
                <div>
                  <h3>Elevate Storytelling</h3>
                  <p>Push narrative boundaries in every medium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;