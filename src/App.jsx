import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import {Home} from "./pages/Home";
import {Programme} from "./pages/Programme";
import {Planning } from "./pages/Planning";
import { Artistdetails} from "./pages/Artistdetails";
import { Passport } from "./pages/Passport";
import { Navbar } from "./Componnents/Navbar";

function App() {
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programme" element={<Programme />} />
      <Route path="/planning" element={<Planning />} />
      <Route path="/artistdetails" element={<Artistdetails />} />
      <Route path="/passport" element={<Passport />} />
    </Routes>
    </>
  );
}
export default App;