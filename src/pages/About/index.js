import { React, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faIcons, faAddressCard, faComputer, faRobot } from '@fortawesome/free-solid-svg-icons'
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
          <h3>test</h3>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}

export default About;
