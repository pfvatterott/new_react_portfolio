import { React, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faIcons, faAddressCard, faComputer, faRobot } from '@fortawesome/free-solid-svg-icons'
import "./style.css"


function Home() {
  const [hoverTitle, setHoverTitle] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  function getCubeLocation(x) {
    let cube = document.getElementById("drag-cube");
    let cubeX = cube.getBoundingClientRect().x
    let cubeY = cube.getBoundingClientRect().y
    let topLeftOption = document.getElementById("top-left-option");
    let topRightOption = document.getElementById("top-right-option");
    let BottomLeftOption = document.getElementById("bottom-left-option");
    let BottomRightOption = document.getElementById("bottom-right-option");
    console.log('cubex ' + cubeX)
    console.log('cubeY ' + cubeY)
    console.log(topLeftOption.getBoundingClientRect())
    console.log(cube.getBoundingClientRect())

    // if to the left
    if (((cubeX / topLeftOption.getBoundingClientRect().x < 1.1) && (cubeX / topLeftOption.getBoundingClientRect().x > .9)) || ((cubeX - topLeftOption.getBoundingClientRect().x < 40) && (cubeX - topLeftOption.getBoundingClientRect().x > -40))) {

      //top-left
      if (((cubeY / topLeftOption.getBoundingClientRect().y < 1.2) && (cubeY / topLeftOption.getBoundingClientRect().y > .8)) || ((cubeY - topLeftOption.getBoundingClientRect().y < 40) && (cubeY - topLeftOption.getBoundingClientRect().cubeY > -40))) {
        console.log('top-left')
      }

      //bottom-left
      else if (((cubeY / BottomLeftOption.getBoundingClientRect().y < 1.2) && (cubeY / BottomLeftOption.getBoundingClientRect().y > .8)) || ((cubeY - BottomLeftOption.getBoundingClientRect().y < 40) && (cubeY - BottomLeftOption.getBoundingClientRect().cubeY > -40))) {
        console.log('bottom-left')
      }
    }

    // if to the right
    if (((cubeX / topRightOption.getBoundingClientRect().x < 1.1) && (cubeX / topRightOption.getBoundingClientRect().x > .9)) || ((cubeX - topRightOption.getBoundingClientRect().x < 40) && (cubeX - topRightOption.getBoundingClientRect().x > -40))) {

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

  return (
    <div>
      <Container className='top-space-container'>
        <Row>
          <Col xs="12" className='text-center'>
            <AnimatePresence>
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
            <FontAwesomeIcon icon={faRobot} id='top-left-option' className='icon-option' onMouseEnter={() => setIsShown('about me')} onMouseLeave={() => setNotShown()}/>
          </Col>
          <Col xs="6" md="3">
            <FontAwesomeIcon icon={faComputer} id='top-right-option' className='icon-option'onMouseEnter={() => setIsShown('languages & skills')} onMouseLeave={() => setNotShown()}/>
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row><br></br></Row>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <motion.div
              drag
              id='drag-cube'
              onDragEnd={(x) => getCubeLocation(x)}
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
            >
              <FontAwesomeIcon icon={faSquare} className='square'/>
            </motion.div>
          </Col>
          <Col xs="3"></Col>
        </Row>
        <Row><br></br></Row>
        <Row>
          <Col md="3"></Col>
          <Col xs="6" md="3">
            <FontAwesomeIcon icon={faIcons} id='bottom-left-option' className='icon-option' onMouseEnter={() => setIsShown('projects')} onMouseLeave={() => setNotShown()}/>
          </Col>
          <Col xs="6" md="3">
            <FontAwesomeIcon icon={faAddressCard} id='bottom-right-option' className='icon-option' onMouseEnter={() => setIsShown('contact')} onMouseLeave={() => setNotShown()}/>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
      <Container className='bottom-space-container'></Container>
    </div>
  )
}

export default Home;
