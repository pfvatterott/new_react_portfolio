import { React, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { Navigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faIcons, faAddressCard, faComputer, faRobot } from '@fortawesome/free-solid-svg-icons'
import "./style.css"


function Home() {
  const [hoverTitle, setHoverTitle] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [mainMenu, setMainMenu] = useState(true)
  const [openAbout, setOpenAbout] = useState(false)

  function getCubeLocation(event, info) {
    let cubeX = info.point.x
    let cubeY = info.point.y
    let topLeftOption = document.getElementById("top-left-option");
    let topRightOption = document.getElementById("top-right-option");
    let BottomLeftOption = document.getElementById("bottom-left-option");
    let BottomRightOption = document.getElementById("bottom-right-option");

    // if to the left
    if (((cubeX / topLeftOption.getBoundingClientRect().x < 1.1) && (cubeX / topLeftOption.getBoundingClientRect().x > .9)) || ((cubeX - topLeftOption.getBoundingClientRect().x < 40) && (cubeX - topLeftOption.getBoundingClientRect().x > -40))) {

      //top-left
      if (((cubeY / topLeftOption.getBoundingClientRect().y < 1.2) && (cubeY / topLeftOption.getBoundingClientRect().y > .8)) || ((cubeY - topLeftOption.getBoundingClientRect().y < 40) && (cubeY - topLeftOption.getBoundingClientRect().cubeY > -40))) {
        console.log('top-left')
        setMainMenu(false)
        setTimeout(function () {
          setOpenAbout(true)

        }, 1500)
      }

      //bottom-left
      else if (((cubeY / BottomLeftOption.getBoundingClientRect().y < 1.2) && (cubeY / BottomLeftOption.getBoundingClientRect().y > .8)) || ((cubeY - BottomLeftOption.getBoundingClientRect().y < 40) && (cubeY - BottomLeftOption.getBoundingClientRect().cubeY > -40))) {
        console.log('bottom-left')
      }
    }

    // if to the right
    if (((cubeX / topRightOption.getBoundingClientRect().x < 1.2) && (cubeX / topRightOption.getBoundingClientRect().x > .95)) || ((cubeX - topRightOption.getBoundingClientRect().x < 50) && (cubeX - topRightOption.getBoundingClientRect().x > -50))) {

      //top-right
      if (((cubeY / topRightOption.getBoundingClientRect().y < 1.2) && (cubeY / topRightOption.getBoundingClientRect().y > .8)) || ((cubeY - topRightOption.getBoundingClientRect().y < 40) && (cubeY - topRightOption.getBoundingClientRect().cubeY > -40))) {
        console.log('top-right')
      }

      //bottom-right
      else if (((cubeY / BottomRightOption.getBoundingClientRect().y < 1.2) && (cubeY / BottomRightOption.getBoundingClientRect().y > .8)) || ((cubeY - BottomRightOption.getBoundingClientRect().y < 40) && (cubeY - BottomRightOption.getBoundingClientRect().cubeY > -40))) {
        console.log('bottom-right')
      }
    }
    
  }

  function setIsShown(x) {
    setHoverTitle(x)
    setIsVisible(true)
  }

  function setNotShown() {
    setHoverTitle('')
    setIsVisible(false)
  }

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
      { openAbout ? (<Navigate push to={{pathname: '/about' }}/>) : null }
      <AnimatePresence>
      {mainMenu && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 1.5}}
        exit={{ opacity: 0 }}
      >
      
      <Container className='top-space-container'>
        <Row>
          <Col xs="12" className='text-center'>
            <AnimatePresence >
              {isVisible && (
              <motion.div
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
              >
              <h2 className='text-center' id="option-description">{hoverTitle}</h2>
              </motion.div>
              )}
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
      <Container className='container-center text-center'>
        <Row>
          <Col md="3"></Col>
          <Col xs="6" md="3">
            <motion.div
              animate={{scale: [1.0,1.1,1.0]}}
              transition={{ repeat: Infinity, delay: 1, repeatDelay: 3.6, repeatType: "reverse", duration: 0.4}}
            >
              <FontAwesomeIcon icon={faRobot} id='top-left-option' className='icon-option' onMouseEnter={() => setIsShown('about me')} onMouseLeave={() => setNotShown()}/>
            </motion.div>
          </Col>
          <Col xs="6" md="3">
          <motion.div
              animate={{scale: [1.0,1.1,1.0]}}
              transition={{ repeat: Infinity, delay: 1, repeatDelay: 3.6, repeatType: "reverse", duration: 0.4}}
            >
              <FontAwesomeIcon icon={faComputer} id='top-right-option' className='icon-option'onMouseEnter={() => setIsShown('languages & skills')} onMouseLeave={() => setNotShown()}/>
          </motion.div>
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row><br></br></Row>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <motion.div
              drag
              style={{x}}
              id='drag-cube'
              onDragEnd={(event, info) => getCubeLocation(event, info)}
              dragSnapToOrigin={true}
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              dragElastic={.8}
              animate={{
                rotate: [0, 0, 270, 270, 0]
              }}          
              whileHover={{ scale: 1.1 }}
              transition={{ repeat: Infinity, repeatDelay: 3.9, repeatType: "reverse", duration: 1.1}}
            >
              <FontAwesomeIcon icon={faSquare} className='square'x={x}/>
            </motion.div>
          </Col>
          <Col xs="3"></Col>
        </Row>
        <Row><br></br></Row>
        <Row>
          <Col md="3"></Col>
          <Col xs="6" md="3">
            <motion.div
                animate={{scale: [1.0,1.1,1.0]}}
                transition={{ repeat: Infinity, delay: 1, repeatDelay: 3.6, repeatType: "reverse", duration: 0.4}}
            >
              <FontAwesomeIcon icon={faIcons} id='bottom-left-option' className='icon-option' onMouseEnter={() => setIsShown('projects')} onMouseLeave={() => setNotShown()}/>
            </motion.div>
          </Col>
          <Col xs="6" md="3">
            <motion.div
                animate={{scale: [1.0,1.1,1.0]}}
                transition={{ repeat: Infinity, delay: 1, repeatDelay: 3.6, repeatType: "reverse", duration: 0.4}}
            >
              <FontAwesomeIcon icon={faAddressCard} id='bottom-right-option' className='icon-option' onMouseEnter={() => setIsShown('contact')} onMouseLeave={() => setNotShown()}/>
            </motion.div>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
      <Container className='bottom-space-container'></Container>
      </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Home;
