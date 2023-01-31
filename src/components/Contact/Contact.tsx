/** @format */

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Spinner from "../spinner/Spinner";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_clfug1n",
        "template_gv0bguc",
        form.current!,
        "user_yNmKy2gEiUbOjV15BmYpi"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "enviado con exito",
            showConfirmButton: false,
            timer: 2000,
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      className='contenido-principal contenedor'
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
      {/* <form className='formulario' ref={form} onSubmit={sendEmail}> */}
      <form className='formulario'>
        <fieldset>
          <legend>Tus Datos</legend>

          <div className='campo'>
            <label htmlFor='nombre'>Nombre: </label>
            <input
              id='nombre'
              type='text'
              placeholder='Tu Nombre'
              name='user_name'
              // onChange={handleInputChange}
            />
          </div>

          <div className='campo'>
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              type='email'
              placeholder='Tu Email'
              name='user_email'
              // onChange={handleInputChange}
            />
          </div>

          <div className='campo'>
            <label htmlFor='tel'>Mensaje:</label>
            <textarea
              rows={3}
              cols={10}
              name='message'
              // onChange={handleInputChange}
            ></textarea>
          </div>
          {/* {spinner ? <Spinner /> : null} */}

          <button className='btn btn-info' type='submit' value='Enviar'>
            Enviar
          </button>
        </fieldset>
      </form>
    </motion.div>
  );
}
