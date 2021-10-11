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
    }, 5000)
  }, [])


  return (
    <div className="App">
      <GlobalStyle />
      <Header />


      <Container>
        <ContainerAC>
          <TitleCon>Técnicos em Ligação:</TitleCon>
          <ActiveCalls user="Técnico:" time_called="Tempo:" phone="Telefone:"/>
          {dataDash.active_calls.map((item, key) => (
            <ActiveCalls user={item.user} time_called={item.time_called} phone={item.phone} key={key} />
          ))}
        </ContainerAC>
        <ContainerQA>
          <TitleCon>Registro de Atendimento:</TitleCon>
          <QueueAgents user="Técnico:" serviced_abandoned_time="Atendida / Abandonada / Tempo:"/>
          {dataDash.queue_agents.map((item, key) => (
            <QueueAgents user={item.user} serviced_abandoned_time={item.serviced_abandoned_time} key={key}/>
          ))}
        </ContainerQA>
      </Container>

      <QueueStats waiting={dataDash.queue_stats.waiting}
        serviced={dataDash.queue_stats.serviced}
        abandoned={dataDash.queue_stats.abandoned}
        average_waiting_time={dataDash.queue_stats.average_waiting_time}
        average_talking_time={dataDash.queue_stats.average_talking_time} />
    </div>
  )
}

export default App
