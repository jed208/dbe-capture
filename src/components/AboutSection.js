import React from 'react';
import home1 from '../img/home1.png';
import {Section, Description, Image, Hide} from '../styles';
import {motion} from 'framer-motion';
import {titleAnimation, fade, photoAnimation} from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <Section>
      <Description>
        <motion.div>
          <Hide>
            <motion.h1 variants={titleAnimation}>We work to make</motion.h1>
          </Hide>
          <Hide>
            <motion.h1 variants={titleAnimation}>your <span>dreams</span></motion.h1>
          </Hide>
          <Hide>
            <motion.h1 variants={titleAnimation}>come true.</motion.h1>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img 
          variants={photoAnimation} 
          // Use next two to skip stagger animation
          // initial='hidden' 
          // animate='show' 
          src={home1} 
          alt="Guy with camera" 
        />
      </Image>
      <Wave />
    </Section>
  )
}

export default AboutSection;