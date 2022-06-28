import { React, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { Container, Row, Col, Collapse } from 'react-bootstrap';
import ProfilePicture from "../../assets/profile-picture.jpg"
import "./style.css"


function About() {
  const [aboutSection, setAboutSection] = useState(true)
  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-300, 0, 300],
    [
      "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
      "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
      "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
    ]
  )
  
  return (
    <motion.div id='full-container' style={{ background }}>
      <AnimatePresence>
        {aboutSection && (
           <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{duration: 1.5}}
           exit={{ opacity: 0 }}
         >
          <Container id='top-space-container-about' className='d-none d-sm-block'></Container>
          <Container id='middle-space-container-about'>
            <Row>
              <Col xs="12" md="6">
                <Row>
                  <Col>
                    <h1>Paul Vatterott</h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2>Full-Stack Web Developer</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <br></br>
                    <p>I am a Full Stack Web Developer Bootcamp graduate with a passion for problem solving, working with others, learning, and making products I’m proud of. My natural curiosity paired with a strong work ethic means I am always looking to improve my skills.</p>

                    <p>Through past experiences leading countless outdoors expeditions I have acquired the ability to work with and manage teams of varying sizes. I naturally like to take the reins to solve problems while also feeling content to step back and learn from others.</p>

                    <p>I am currently employed as a Sr. Technical Support Specialist at ClickUp where I have developed a deep understanding of ClickUp’s software. My responsibilities include finding bugs, assisting enterprise clients with technical issues, and helping colleagues when they have questions about the product.</p>
                  </Col>
                </Row>
              </Col>
              <Col xs="12" md="6" className='text-center'>
                <img src={ProfilePicture} id="profile-pic"></img>
              </Col>
            </Row>
          </Container>
          <Container id='bottom-space-container-about'></Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default About;
