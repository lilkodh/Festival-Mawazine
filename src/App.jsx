import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'
import {Home} from "./pages/Home";
import {Programme} from "./pages/Programme";
import {Planning } from "./pages/Planning";
import { Artistdetails} from "./pages/Artistdetails";
import { Passport } from "./pages/Passport";
import { Layout } from "./Componnents/Layout";
function App() {
    const [planning, setPlanning] = useState(
  JSON.parse(localStorage.getItem("planning")) || [] 
)

  useEffect(
() => {
  localStorage.setItem("planning",JSON.stringify (planning))
}, [planning]
)
const[passport,setPassport] = useState(
  JSON.parse(localStorage.getItem("passport")) || []

)

useEffect(() => {
  localStorage.setItem("passport",JSON.stringify(passport) )
} ,[passport] )

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home  />} />
        <Route path="programme" element={<Programme planning = {planning} setPlanning = {setPlanning}/>} />
        <Route path="planning" element={<Planning planning = {planning} setPlanning = {setPlanning}/>} />
        <Route path="programme/:artistId" element={<Artistdetails passport={passport} setPassport={setPassport} />} />
        <Route path="passport" element={<Passport passport={passport} />} />
      </Route>
    </Routes>
  );
}
export default App;