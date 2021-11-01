import React, { useState, useEffect } from "react"

import GlobalStyle from "./GlobalStyle"
import api from './api'
import Header from "./components/Header"
import ActiveAgents from "./components/ActiveAgents"
import QueueStats from "./components/QueueStats"


function App() {
  const [dataDash, setDataDash] = useState({ active_calls: [], queue_agents: [], queue_stats: {} })

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
      <QueueStats waiting={dataDash.queue_stats.waiting}
        serviced={dataDash.queue_stats.serviced}
        abandoned={dataDash.queue_stats.abandoned}
        average_waiting_time={dataDash.queue_stats.average_waiting_time}
        average_talking_time={dataDash.queue_stats.average_talking_time} />
      <ActiveAgents dataDash={dataDash}/>      
      
    </div>
  )
}

export default App
