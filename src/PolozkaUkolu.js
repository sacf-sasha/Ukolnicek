 export default function PolozkaUkolu({ukol, poradi, SmazatUkol}) {
    return(
        <>
        <div className="ukol">
            <span>{poradi} </span> 
            <span style={{color: "blue", fontWeight:"bold" }}>{ukol}</span> 
            <button onClick={()=> SmazatUkol(poradi)}>smazat</button> 
            <button>Hotovy</button>
        </div>
        <br/>
        </>
    )
}