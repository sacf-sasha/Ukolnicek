import {useState} from 'react'

export default function NovyUkol({pridejUkol}) {
    const [ukol, nastavUkol] = useState(" ");

    return (
        <>
        <input
        value = {ukol}
        onChange = {(udalost)=> nastavUkol(udalost.target.value)}
        >
        </input>
        <button onClick={() => pridejUkol(ukol)}>Přidej úkol</button>
        </>
    )
}
 