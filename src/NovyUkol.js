import {useState} from 'react';
import {Button} from "@mui/material"
import {TextField} from '@mui/material';

export default function NovyUkol({pridejUkol}) {
    const [ukol, nastavUkol] = useState(" ");

    return (
        <>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" 
    
        value = {ukol}
        onChange = {(udalost)=> nastavUkol(udalost.target.value)}
        />
        {/* <button onClick={() => pridejUkol(ukol)}>Přidej úkol</button> */}
        <Button variant="contained" onClick={() => pridejUkol(ukol)} className='muiButton'>Přidej úkol</Button>
        </>
    )
}
 