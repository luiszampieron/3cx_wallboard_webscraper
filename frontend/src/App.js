import React, { useState, useEffect } from "react"

import GlobalStyle from "./GlobalStyle"
import api from './api'
import Header from "./components/Header"
import ActiveAgents from "./components/Conteiner"
import Footer from "./components/Footer"


function App() {
  const [dataDash, setDataDash] = useState({ active_calls: [], queue_agents: [], technicians_average: [], queue_stats: {}, overall_average: {} })

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
      
      <ActiveAgents dataDash={dataDash}/>

      <Footer/>
      
    </div>
  )
}

export default App
