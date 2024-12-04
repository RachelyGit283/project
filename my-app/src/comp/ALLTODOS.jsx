import { useReducer, useState } from "react"
import TODO from "./TODO";



const ALLTODOS = () => {
    let initState = [{ name: "hhh", id: 132 }]
    let [input, setInput] = useState(" ")
    let [countid, setcountid] = useState(" ")

    const countReducer = (state, action) => {

        switch (action.type) {
            case "add":
                setcountid(countid+1)
                // // <TODO name={action.payload} id={countid} array={initState}/>
                // state.push({ name: action.payload, id: countid })
                // console.log("state");
                // console.log(state);
                // return state
                const a=state.map(e=>{return {name:e.name, id:e.id} })
                // <TODO name={action.payload} id={countid} array={initState}/>
                a.push({ name: action.payload, id: countid })
                return a
            case "del":
                 
                return state.filter((a) => a.id !== action.payload)
            default:
                throw new Error()
        }

    }
    const [count, dispatch] = useReducer(countReducer, initState)
    count.map(e=>console.log(e.name))
    const handleAdd = () => {
        dispatch({ type: "add", payload: input })
    }


    return (
        <>
        

            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAdd}>
                click me and add
            </button>
            {
            count.map(element => {
        
              return  <TODO name={element.name} id={element.id}  dispatch={dispatch} />
            })

            }

        </>
    )
}

export default ALLTODOS