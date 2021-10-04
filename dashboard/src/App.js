import React, { useState, useEffect } from "react"

import GlobalStyle from "./GlobalStyle"
import { Container, ContainerAC, ContainerQA, TitleCon } from './styled_app'
import api from './api'
import Header from "./components/Header"
import ActiveCalls from "./components/ActiveCalls"
import QueueStats from "./components/QueueStats"
import QueueAgents from "./components/QueueAgents"

function App() {
  const [dataDash, setDataDash] = useState({ active_calls: [], queue_agents: [], queue_stats: {} })

  useEffect(() => {
    setInterval(() => {
      const loadAll = async function () {
        setDataDash(await api())
      }
  
      loadAll()
      console.log('Rodando')
    }, 5000)
  }, [])


  return (
    <div className="App">
      <GlobalStyle />
      <Header />


      <Container>
        <ContainerAC>
          <TitleCon>Técnicos Ativos:</TitleCon>
          {dataDash.active_calls.map((item, key) => (
            <ActiveCalls user={item.user} time_called={item.time_called} phone={item.phone} key={key} />
          ))}
        </ContainerAC>
        <ContainerQA>
          <TitleCon>Registro de Atendimento:</TitleCon>
          {dataDash.queue_agents.map((item, key) => (
            <QueueAgents user={item.user} serviced_abandoned_time={item.atendidas_abandonadas_tempo} key={key}/>
          ))}
        </ContainerQA>
      </Container>


      <QueueStats waiting={dataDash.queue_stats.waiting}
        serviced={dataDash.queue_stats.serviced}
        abandoned={dataDash.queue_stats.abandoned}
        longest_waiting={dataDash.queue_stats.longest_waiting}
        average_waiting_time={dataDash.queue_stats.average_waiting_time}
        average_talking_time={dataDash.queue_stats.average_waiting_time} />
    </div>
  )
}

export default App
