import { Container, ContainerAC, ContainerQA, ContainerQS, TitleCon, DivTeste } from './styled'
import QueueAgents from "../QueueAgents"
import QueueAgentsTitle from '../QueueAgentsTitle'

import ActiveCalls from "../ActiveCalls"
import ActiveCallsTitle from '../ActiveCallsTitle'

import QueueStats from '../QueueStats'
import Subs from '../Subs'

export default ({ dataDash }) => {

    function mergeData(dataDash) {
        for (let i = 0; i < dataDash.technicians_average.length; i++) {
            const nameAverage = dataDash.technicians_average[i].nomeTecnico.split(' ')
            const ramalAverage = nameAverage[nameAverage.length - 1]

            for (let c = 0; c < dataDash.queue_agents.length; c++) {
                const nameQueue = dataDash.queue_agents[c].user.split(' ')
                const ramalQueue = `[${nameQueue[0]}]`

                if (ramalAverage == ramalQueue) {
                    dataDash.queue_agents[c].average = dataDash.technicians_average[i].mediaTecnico
                    break
                }
            }
        }
    }

    function activeCallsOn() {
            return <ContainerAC>
                <TitleCon>FILA DE ATENDIMENTO</TitleCon>
                <ActiveCallsTitle/>
                {dataDash.active_calls.map((item, key) => (
                    <ActiveCalls user={item.user} time_called={item.time_called} phone={item.phone} key={key} />
                ))}
            </ContainerAC>
    }

    function QueueAgentsOn() {
        mergeData(dataDash)
            return <ContainerQA>
                <TitleCon>HISTÓRICO DE ATENDIMENTO</TitleCon>
                <QueueAgentsTitle />
                {dataDash.queue_agents.map((item, key) => (
                    <QueueAgents user={item.user}
                        abandoned={item.abandoned}
                        answered={item.answered}
                        status={item.status}
                        logged={item.logged}
                        average={item.average} key={key} />
                ))}
                    <Subs/>

            </ContainerQA>
    }

    return (
        <Container>
            <ContainerQS>
                <QueueStats waiting={dataDash.queue_stats.waiting}
                serviced={dataDash.queue_stats.serviced}
                abandoned={dataDash.queue_stats.abandoned}
                average_waiting_time={dataDash.queue_stats.average_waiting_time}
                average_talking_time={dataDash.queue_stats.average_talking_time}
                ligacaoesAvaliadas={dataDash.overall_average.ligacaoesAvaliadas}
                notaGeral={dataDash.overall_average.notaGeral} />
            </ContainerQS>
            {
                activeCallsOn()
            }
            {
                QueueAgentsOn()
            }
            
            
        </Container>
    )
}