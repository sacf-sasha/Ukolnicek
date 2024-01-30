import NovyUkol from "./NovyUkol";
import {useState} from 'react'
import PolozkaUkolu from "./PolozkaUkolu";

export default function Ukolnicek() {
    const [seznamUkolu, nastavSeznamUkolu] = useState([''])
    
    function pridejUkol(novyUkol) {
        nastavSeznamUkolu([...seznamUkolu, novyUkol])
        
    }
    function SmazatUkol(poradiUkolu) {
        console.log("smazat tenhle ukol",poradiUkolu)
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu.splice(poradiUkolu,1);
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
        <PolozkaUkolu ukol={ukol} key={poradi} poradi={poradi}SmazatUkol={SmazatUkol}/>)}
        </div>
        <span>Počet úkolů: {seznamUkolu.length}</span>
        <button onClick={() => pridejUkol("Nový úkol")}>Pridej nahodný ukol</button>
       
    </>
)

}