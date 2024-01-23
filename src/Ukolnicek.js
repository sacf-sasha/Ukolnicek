import NovyUkol from "./NovyUkol";
import {useState} from 'react'
import PolozkaUkolu from "./PolozkaUkolu";

export default function Ukolnicek() {
    const [seznamUkolu, nastavSeznamUkolu] = useState([''])

    function pridejUkol(novyUkol) {
        nastavSeznamUkolu([...seznamUkolu, novyUkol])
    }


    return (
        <>
        <NovyUkol pridejUkol={pridejUkol}/>
        {/* {
        seznamUkolu.map((ukol)=>(
            <>
            <span>{ukol}</span>
            <br/>
            </>
        ))
        } */}
        {seznamUkolu.map((ukol, poradi) => <PolozkaUkolu ukol={ukol} poradi={poradi}></PolozkaUkolu>)}
        <button onClick={() => pridejUkol("Nový úkol")}>Pridej nahodný ukol</button>
    </>
)

}