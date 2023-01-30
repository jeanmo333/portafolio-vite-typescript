/** @format */

import { Component } from "react";
import { motion } from "framer-motion";
import "./Habillity.css";

export default class Habillity extends Component {
  render() {
    return (
      <motion.div
        className='contenedor'
        initial={{
          opacity: 0.7,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}>
        <div id='sobremi' className='acerca-de mt-4'>
          <div className='info'>
            <h2 className='titulo mt-4'>Conocimientos</h2>

            <p className='label'>HTML</p>
            <div className='progress'>
              <div className='progress-bar' style={{ width: "80%" }}>
                80%
              </div>
            </div>

            <p className='label'>CSS</p>
            <div className='progress'>
              <div className='progress-bar' style={{ width: "70%" }}>
                70%
              </div>
            </div>

            <p className='label'>Javascript</p>
            <div className='progress'>
              <div className='progress-bar' style={{ width: "70%" }}>
                70%
              </div>
            </div>

            <p className='label'>Nodejs</p>
            <div className='progress'>
              <div className='progress-bar' style={{ width: "60%" }}>
                70%
              </div>
            </div>

            <p className='label'>Nestjs/Nextjs</p>
            <div className='progress'>
              <div className='progress-bar' style={{ width: "60%" }}>
                60%
              </div>
            </div>

            <p className='label'>Reactjs/React Native</p>
            <div className='progress'>
              <div className='progress-bar' style={{ width: "70%" }}>
                70%
              </div>
            </div>

            <p className='label'>Java</p>
            <div className='progress'>
              <div className='progress-bar' style={{ width: "55%" }}>
                55%
              </div>
            </div>

            <p className='label'>Springboot</p>
            <div className='progress'>
              <div className='progress-bar' style={{ width: "40%" }}>
                40%
              </div>
            </div>

            <p className='label'>Git/Github</p>
            <div className='progress'>
              <div className='progress-bar' style={{ width: "15%" }}>
                50%
              </div>
            </div>

            <p className='label'>Php</p>
            <div className='progress mb-5'>
              <div className='progress-bar' style={{ width: "15%" }}>
                30%
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
