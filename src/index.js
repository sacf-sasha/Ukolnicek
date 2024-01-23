import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import PrvniKomponenta from './PrvniKomponenta';
import PozdravTridu from './PozdravTridu';
import Komponenta from './Komponenta';
import KomponentaSeStylem from './KomponentaSeStylem';
import './style.css';
import Hlavni_nadpis from './Hlavni_nadpis';
import Pocitadlo from './Pocitadlo';

import Profil from './Profil';
import './App.css';
//import profilovyObrazek from './images/obrazek1.jpg'
//import profilovyObrazek2 from './image/.png'
//import Auta from "./Auta"
import DataAut from "./cars.json"
import Aplikace_hodnoceni from './Aplikace_hodnoceni';
//import './aplikace_hodnoceni.css';
import Pridavadlo from "./Pridavadlo";
import Test from './Test';
import './test.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
//let pole= ["Michal","Saša","Karel","Martin","Stanislav","Jan"]

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <PrvniKomponenta jmeno ="Matej" dotaz="Jak se máte?" oblibeneCislo={5}/> */}
    {/* {pole.map(jmeno => <PozdravTridu jmeno={jmeno}/>)} */}
    {/* <Komponenta sirka = {10} vyska={15}/> */}
    {/* {DataAut.map(auta => 
    <Auta
    image={auta.image}
    title={auta.title}
    class={auta.class}
/>
)} */}
    {/* <Pocitadlo/> */}
    {/* <Aplikace_hodnoceni/> */}
    {/* <Pridavadlo/> */}
  <Test/>




  </React.StrictMode>
);  

  