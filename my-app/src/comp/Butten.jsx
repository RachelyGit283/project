import { useState } from "react"

const Butten = (props) => {
   
const [Flag, setFlag] = useState(0)
 
    return (
        <>

            <br />
            <button onClick={()=>setFlag(1)}>click me </button>
            {Flag==1?<div>{props.name}</div>:null}
        </>
    )
}
export default Butten