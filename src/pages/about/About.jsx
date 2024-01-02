import React from 'react';
import './about.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur 
        adipisicing elit. Cumque quia odio molestiae 
        totam consectetur. Non!
      </Header>

      <section className='about__story'>
        <div className='container about__story-container'>
          <div className='about__section-image'>
            <img src={StoryImage} alt='Our Story Pic' />
          </div>
          <div className='about__section-content'>
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Facere a pariatur molestiae
               sapiente accusamus, possimus dolorum dolorem 
               totam illum magnam, optio rem voluptates ad 
               expedita.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
               elit. Repudiandae voluptatem ad libero, inventore
                deleniti aperiam non assumenda?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Excepturi, veritatis?
            </p>
          </div>
        </div>
      </section>

      <section className='about__vision'>
        <div className='container about__vision-container'>
          <div className='about__section-content'>
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Facere a pariatur molestiae
               sapiente accusamus, possimus dolorum dolorem 
               totam illum magnam, optio rem voluptates ad 
               expedita.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
               elit. Repudiandae voluptatem ad libero, inventore
                deleniti aperiam non assumenda?
            </p>
          </div>
          <div className='about__section-image'>
            <img src={VisionImage} alt='Our Vision Pic' />
          </div>
        </div>
      </section>

      <section className='about__mission'>
        <div className='container about__mission-container'>
          <div className='about__section-image'>
            <img src={MissionImage} alt='Our Mission Pic' />
          </div>
          <div className='about__section-content'>
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Facere a pariatur molestiae
              sapiente accusamus, possimus dolorum dolorem 
              totam illum magnam, optio rem voluptates ad 
              expedita.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipi sicing
              elit. Repudiandae voluptatem ad libero, inventore
                deleniti aperiam non assumenda?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Excepturi, veritatis?
            </p>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default About