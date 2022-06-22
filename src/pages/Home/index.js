import React from 'react'
import { motion, motionValue, useMotionValue } from "framer-motion"
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import "./style.css"


function Home() {


  function test(x) {
    console.log('x-axis ' + x.x)
    console.log('y-axis ' + x.y)
  }

  return (
    <div>
      <Container className='container-center'>
        <Row className='top-row-options'>
          <Col className="left-option">
            <h3>Test</h3>
          </Col>
          <Col className="right-option">
            <h3>Test</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <motion.div
              drag
              onDragEnd={(x) => test(x)}
              dragSnapToOrigin={true}
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
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
            <h3>Test</h3>
          </Col>
          <Col className='right-option'>
            <h3>Test</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
