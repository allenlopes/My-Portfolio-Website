import React from 'react'
import './about.css'
import ME from '../../assets/IMG_1834_copy.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers}from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

         {/*<article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article> */}

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>

          <p>
          I am Allen Lopes, a <strong><span style={{color: "powderblue"}}>Software Developer</span></strong>, having good understanding of programming concepts and able to write code independently.<br></br>
          Also, I have good understanding of <strong><span style={{color: "powderblue"}}>Web development</span></strong> best practices and able to write clean, maintainable, and efficient code.<br></br>
          Apart from development practices, I have hands on practice on the methods and tools used to identify and <strong><span style={{color: "powderblue"}}>Exploit vulnerabilities</span></strong> in web applications.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About