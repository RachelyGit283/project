import logo from './logo.svg';
import './App.css';
import ALLTODOS from './comp/ALLTODOS';
import { Link, Route, Routes } from 'react-router-dom'
import { useState,useContext } from "react"

////
//add
import React, { Suspense } from 'react';
import Name from './comp/cont/name';
import Ps from './comp/cont/ps';
// import './App.css';
// import { Link, Route, Routes } from 'react-router-dom'
// import Home from './Components/Home';
// import Login from './Components/Login';
// import Users from './Components/Users';
// import AllTasks from './Components/AllTasks';
// import NewTask from './Components/NewTask';
// import TaskById from './Components/TaskById';
const LazyHome = React.lazy(()=>import('./comp/Home'))
const LazyLogin = React.lazy(()=>import('./comp/Login'))
const Lazybooks = React.lazy(()=>import('./comp/Books'))
const LazybooksId = React.lazy(()=>import('./comp/booksId'))
consol.log("fff")
// const LazyAllTasks = React.lazy(()=>import('./Components/AllTasks'))
// const LazyNewTask = React.lazy(()=>import('./Components/NewTask'))
// const LazyTaskById = React.lazy(()=>import('./Components/TaskById'))
//////
function App() {
  const [name, setname] = useState("")

  const [arrb, setArrb] = useState([{"id":1,"name":"little princess","page":189,"author":"Taly"}, {"id":2,"name":"my princess","page":89,"author":"Sara"}, {"id":3,"name":"we princess","page":65,"author":"Miri"},{"id":4,"name":"you princess","page":75,"author":"Taly"},{"id":5,"name":"i princess","page":123,"author":"Talya"}])

  return (
    <div className="App">
      <div id="navbar">
       {/* <Link  to={'/home'}>ALLTODOS</Link> */}
       <Link  to={'/Home'}>home</Link>
       <Link  to={'/Login'}>login</Link>
       <Link  to={'/Books'}>books</Link>
       {/* <Link to={'/Books/booksId'}>AllTasks|NewTask</Link> */}
    <br />
       <h1>name   {name}</h1>

</div>   
<Name.Provider value={{name, setname }}>

       <br />
      <br />
      <Routes> 
        <Route path='/Books' element={<Suspense fallback="loading..."><Lazybooks arrb={arrb}/></Suspense> } />
               <Route path='/Login' element={<Suspense fallback="loading..."><LazyLogin/></Suspense> } />
        <Route path='/Home' element={<Suspense fallback="loading..."><LazyHome/></Suspense> } />
        <Route path='/Books' element={<Suspense fallback="loading..."><Lazybooks arrb={arrb} /></Suspense> }>
          <Route path=':Id' element={<Suspense fallback="loading..."><LazybooksId arrb={arrb} /></Suspense> } />
        </Route>
        {/* <Route path='/home' element={<ALLTODOS/>} /> */}
    </Routes>
 </Name.Provider>

     
    </div>
  );
}

export default App;
