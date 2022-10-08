import React from "react";
import Header from "./Components/Header/Header";
import Imagesection from "./Components/Home/Imagesection";
import Newsupdate from "./Components/Home/Newsupdate";
import SectionB from "./Components/SectionB/SectionB";
import Section_Ca from "./Components/Section_Ca/Section_Ca";
import SectionC from "./Components/Section_C/SectionC";
import SectionD from './Components/Secton_D/SectionD'
import './Components/App.css'
function App() {
  return (
    <div >
    <Header />
    <Imagesection />
    <Newsupdate />
    <SectionB/>
    <Section_Ca/>
    <SectionC/>
    <SectionD/>
    </div>
  );
}

export default App;
