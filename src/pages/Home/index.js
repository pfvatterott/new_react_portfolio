import { React } from 'react'
import { motion } from "framer-motion"
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import "./style.css"


function Home() {

  function getCubeLocation(x) {
    let cube = document.getElementById("drag-cube");
    let cubeX = cube.getBoundingClientRect().x
    let cubeY = cube.getBoundingClientRect().y
    let topLeftOption = document.getElementById("top-left-option");
    let topRightOption = document.getElementById("top-right-option");
    let BottomLeftOption = document.getElementById("bottom-left-option");
    let BottomRightOption = document.getElementById("bottom-right-option");

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

  return (
    <div>
      <Container className='container-center'>
        <Row className='top-row-options'>
          <Col className="left-option">
            <h3 id='top-left-option'>Test</h3>
          </Col>
          <Col className="right-option">
            <h3 id='top-right-option'>Test</h3>
          </Col>
        </Row>
        <Row>
          <Col>
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
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              whileHover={{ scale: 1.1 }}
            >
              <FontAwesomeIcon icon={faSquare} className='square'/>
            </motion.div>
          </Col>
        </Row>
        <Row className='bottom-row-options'>
          <Col className='left-option'>
            <h3 id='bottom-left-option'>Test</h3>
          </Col>
          <Col className='right-option'>
            <h3 id='bottom-right-option'>Test</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
