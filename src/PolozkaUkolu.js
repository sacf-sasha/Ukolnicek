 export default function PolozkaUkolu({ukol, poradi, SmazatUkol, fceSpln}) {
    return(
        <>
        <div className="ukol">
            <span>{poradi} </span> 
            {!ukol.splneno && <span className="textUkolu">{ukol.text}</span>}
            {ukol.splneno && <span className="splneno">{ukol.text}</span>}

            <button onClick={()=> SmazatUkol(poradi)}>smazat</button> 
            <button onClick={()=> fceSpln(poradi, )}>Hotovy</button> 
        </div>
        <br/>
        </>
    )
}