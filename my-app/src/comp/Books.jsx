import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import BooksId from "./booksId"

const Books =({arrb}) =>{

    
    return(
        <>      
         Books
         <div id="navbar">

                 {arrb.map((item) => {
                return (
                    <>
                        <h3>
                             {item.name}
                            <Link to={`/Books/${item.id}`}>more</Link>
                        </h3>
                    </>
                )
            })}
           </div>
             <Outlet />
        </>
    )
}

export default Books