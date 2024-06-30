import React from "react" ; 
import "./index.css" ;
import { Navbar } from "./composants/Navbar";
import { Screen } from "./composants/Screen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Connexion } from "./pages/Connexion";
import Contact from "./pages/Contact";

import Moncompte from "./pages/Moncompte";
import NoPage from "./pages/NoPage";
import Registration from "./pages/Registration";
import Dashboard from "./composants/Dashboard";
import Accueilsdash from "./pages/Accueilsdash";

import { Patient } from "./composants/Patient";
import { Rdv } from "./composants/Rdv";
import { Mesrendezvous } from "./pages/Mesrendezvous";
import  Ajoutpatient from "./pages/Ajoutpatient";
import Ajoutrdv  from "./pages/Ajoutrdv";
import Status from "./pages/Status";





function App() {
 return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navbar/>}>
          <Route index element={ <Screen/>} />
          <Route path="connexion" element= {<Connexion/>} />
          <Route path="contact" element= {<Contact />} />
          
          
          <Route path="*" element={<NoPage/>} />
          <Route path="registration" element={<Registration/>} />
          </Route>


           {/* dashboard */}


          <Route path="dashboard" element={<Dashboard/>} >
          <Route index element={ <Accueilsdash/>} />
          <Route path="/dashboard/rdv" element= {<Rdv/>} />
          <Route path="/dashboard/Patient" element={<Patient/>} />
          <Route path="/dashboard/moncompte" element={<Moncompte/>} />
          <Route path="/dashboard/mesrendezvous" element={<Mesrendezvous/>} />
          <Route path="/dashboard/moncompte" element={<Moncompte/>} />

          </Route >
          <Route path="/Ajoutpatient" element={<Ajoutpatient/>} >
          </Route >
          <Route path="/Ajoutrdv" element= {<Ajoutrdv/>} >
          </Route >
          <Route path="/Status" element= {<Status/>} >
          </Route >
         
          

       
      </Routes>
    </BrowserRouter>

  
  
 
 </>
  ) ;
}

export default App
