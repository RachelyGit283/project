import { useEffect } from "react"
import { Navigate, useParams } from "react-router-dom"

const BooksId = (props) => {


    const arrb=props.arrb
    const {Id} = useParams()
   
    //  const getTaskById = async(Id) => 
    //     {

    //     {
    //         arrb.map((item) => {
    //         if (item.id===Number(Id))
    //         return (
    //             <>
    //                 <p>
    //                      {item.name}
    //                 </p>
    //             </>
    //         )
    //     })}



    //  }
    // useEffect(() => {
    //    getTaskById(Id)
    //  }, [])

    
    return (
        <>
         {
            arrb.map((item) => {
            if (item.id===Number(Id))
            return (
                <>
                    <p>
                         {item.name}
                         <br/>
                         {item.author}
                         <br/>
                         {item.page}

                    </p>
                </>
            )
        })}
            booksId {Id}
        </>
    )
}
// }
export default BooksId