import { Navigate, useParams } from "react-router-dom"
import { useState,useContext } from "react"
     import Name from "./cont/name"
     import Ps from "./cont/ps"

const Login =() =>{           
     let [inputn, setInputn] = useState(" ")
     let [inputp, setInputp] = useState(" ")

    const {name,setname} = useContext(Name)
    const {ps,setps} = useContext(Ps)


const handle = () => {
    setname(inputn)
}
    return(
        <> 

        Login
        <p>name</p>
         <input type="text" onChange={(e) => setInputn(e.target.value)} />
         <br/>
        
        <p>pw</p>
        <input type="text" onChange={(e) => setInputp(e.target.value)} />
        <br/>
        <button onClick={handle}>
                click me
            </button>
        </>
    )
}

export default Login