import React, { useState, useEffect } from "react"

import GlobalStyle from "./GlobalStyle"
import api from './api'
import Header from "./components/Header"
import Conteiner from "./components/Conteiner"
import Footer from "./components/Footer"


function App() {
  const [dataDash, setDataDash] = useState({ active_calls: [], queue_agents: [], technicians_average: [], queue_stats: {}, overall_average: {}, msg: "" })

  useEffect(() => {
    setInterval(() => {
      const loadAll = async function () {
        setDataDash(await api())
      }
      loadAll()
    }, 5000)
  }, [])

  return (
    <div className="App">
      <GlobalStyle />

      <Header />
      
      <Conteiner dataDash={dataDash}/>

      <Footer dataDash={dataDash}/>
      
    </div>
  )
}

export default App
