import { useState } from "react"

const TODO = (props) => {

    return (
        <>

            <div id={props.id}>{props.name}</div>


            <button onClick={() => props.dispatch({ type: "del", payload: props.id })
            }>del</button>


        </>
    )
}
export default TODO