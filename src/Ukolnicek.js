import NovyUkol from "./NovyUkol";
import {useState} from 'react'
import PolozkaUkolu from "./PolozkaUkolu";

export default function Ukolnicek() {



    const [seznamUkolu, nastavSeznamUkolu] = useState([
        {text: "Novy ukol", splneno: false},
        {text: "dalsi ukol", splneno: false},
        {text: "splneny ukol", splneno: true},
    ])
    
    function pridejUkol(novyUkol) {
        let novyUkolObj = {text: novyUkol, splneno: false}
        nastavSeznamUkolu([...seznamUkolu, novyUkolObj])
    }
    function SmazatUkol(poradiUkolu) {
        console.log("smazat tenhle ukol",poradiUkolu)
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu.splice(poradiUkolu,1);
        nastavSeznamUkolu(upravenySeznamUkolu);
    }   
    function splnUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu[poradiUkolu].splneno = !upravenySeznamUkolu[poradiUkolu].splneno
        // if (upravenySeznamUkolu[poradiUkolu].splneno == true) {
        //     upravenySeznamUkolu[poradiUkolu].splneno = false
        // } else{
        //     upravenySeznamUkolu[poradiUkolu].splneno = true
        // }
        nastavSeznamUkolu(upravenySeznamUkolu);
    }


    return (
        <>
        <NovyUkol pridejUkol={pridejUkol}/>
        <br/>
        <div id="ukoly">
        {/* {
        seznamUkolu.map((ukol)=>(
            <>
            <span>{ukol}</span>
            <br/>
            </>
        ))
        } */}
        {seznamUkolu.map((ukol, poradi) => 
        <PolozkaUkolu ukol={ukol} key={poradi} poradi={poradi}SmazatUkol={SmazatUkol} fceSpln={splnUkol}/>)}
        </div>
        <span>Počet úkolů: {seznamUkolu.length}</span>
        <button onClick={() => pridejUkol("Nový úkol")}>Pridej nahodný ukol</button>
       
    </>
)

}