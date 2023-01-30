/** @format */

import { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const [clicked, setClicked] = useState(false);
  const [currentLink, setCurrentLink] = useState(1);

  const handleClick = () => setClicked(!clicked);
  const closeMobileMenu = () => setClicked(false);
  return (
    <>
      <nav className='nav'>
        <a
          className='navbar-logo'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/jeanmo333'>
          <motion.i
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className='fa fa-github'></motion.i>
        </a>

        <ul id='navbar' className={clicked ? "#navbar active" : "#navbar"}>
          <li onClick={closeMobileMenu}>
            <Link
              to='/'
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}>
              Home
            </Link>
          </li>

          <li onClick={closeMobileMenu}>
            <Link
              to='/about-mi'
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}>
              Sobre-mi
            </Link>
          </li>

          <li onClick={closeMobileMenu}>
            <Link
              to='/contact'
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}>
              Contacto
            </Link>
          </li>

          <li onClick={closeMobileMenu}>
            <Link
              to='/hability'
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}>
              Habilidades
            </Link>
          </li>

          <li onClick={closeMobileMenu}>
            <Link
              to='/projects'
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}>
              Proyectos
            </Link>
          </li>
        </ul>

        <div id='mobile' onClick={handleClick}>
          <motion.i
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            id='bar'
            className={clicked ? "fas fa-times" : "fas fa-bars"}></motion.i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
