import "./AboutPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import CharCard from "../../Components/CharCard/ChardCard";

const AboutPage = () => {
  
  const [data, setData]=useState({});
  
  let {id} = useParams();

 useEffect(()=>{
  axios.get(`https://dragonball-api.com/api/characters/${id}`)
  .then(char=> setData(char.data))},[])

  return (
    <main id='about-page'>
        <h1 id="title-character">Character Page</h1>    
        <CharCard img={data.image} nombre={data.name} especie={data.race}  baseKi={data.ki} totalKi={data.maxKi} affiliation={data.affiliation}/>
    </main>
  )
}

export default AboutPage