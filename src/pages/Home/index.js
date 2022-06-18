import React from 'react'
import { motion } from "framer-motion"
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import "./style.css"


function Home() {


  return (
    <div>
      <Container className='container-center'>
        <Row>
          <Col>
            <motion.div
              drag
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
      </Container>
    </div>
  )
}

export default Home;
