import React from 'react';
import './About.css';
import Footer from "../../Components/Footer/Footer";
const About = () => {
  return (
    <main className="new-page">
      <h1>About</h1>

      <section>
        <h2>¿Qué es esto?</h2>
        <p>
          La API de Dragon Ball es una API REST integral inspirada en la icónica serie de televisión Dragon Ball. 
          Esta API ofrece a los usuarios acceso a una extensa base de datos que incluye cientos de personajes, 
          imágenes, transformaciones y planetas del universo de Dragon Ball.
        </p>
   
      </section>

      <section>
        <h2>¿Quién eres?</h2>
        <p>
          "Soy Walter Danilo Noguera Quintero, un chico al que le encanta desarrollar cosas. Estudio en la universidad de la amazonia
          , y tengo una profunda pasión por Dragon Ball."
        </p>
      </section>

      <section>
        <h2>¿Por qué construiste esto?</h2>
        <p>
          La pasión por Dragon Ball y el deseo de ayudar a mis compañeros de estudios me llevaron a desarrollar este recurso. 
          Como estudiante, entiendo los desafíos que enfrentamos y quería contribuir creando una herramienta útil que 
          permite a los estudiantes explorar el universo Dragon Ball.
        </p>
      </section>

      <section>
        <h2>¿Cosas técnicas?</h2>
        <p>
          La API de Dragon Ball se desarrolla utilizando NodeJS, que está construida sobre el motor Express. 
          Además, utiliza servicios como MySQL para la base de datos y se apoya en la API de Cloudinary para manejar imágenes.
        </p>
      </section>

      <section>
        <h2>¿Derechos de autor?</h2>
        <p>
          Todos los personajes, imágenes y contenido relacionado de Dragon Ball que aparecen en este proyecto son propiedad de sus respectivos creadores. 
          Este proyecto es una iniciativa implementada en base a la api  para los fans y no busca infringir los derechos de Dragon Ball.
        </p>
      </section>
      <Footer></Footer>
    </main>
   
  );
  
};

export default About;