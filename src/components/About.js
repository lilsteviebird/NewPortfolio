import React from 'react';
import Typewriter from 'typewriter-effect';
import PortraitPic from '../images/portrait.jpg';

const About = (props) =>{

    const handleIntroduction = (typewriter) =>{
        typewriter.typeString('Hi it\'s very nice to meet you')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('My name is Steven, welcome to my portfolio :)')
                    .start();
    }

    return(
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <Typewriter onInit= {handleIntroduction}/>
            <br className="hidden lg:inline-block" />  
          </h1>
          <p className="mb-8 leading-relaxed">
            Hey! I'm a recent graduate from the University of Rochester (Dec 2022) with a B.S. in Computer Science and a B.A. in Economics. 
            Although young (I just turned 23... yikes), I've been fortunate to have had several professional experiences 
            within the software industry inside prominent orginizations. Although my skills lie towards the back-end side of things, I've been recently learning more front-end work
            in my free time to become a more complete developer! This website, for example, was created with React and using Tailwind CSS. Please check out the snapshots of my coding experiences
            below!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src= {PortraitPic}
          />
        </div>
      </div>
    </section>
    );
}

export default About;