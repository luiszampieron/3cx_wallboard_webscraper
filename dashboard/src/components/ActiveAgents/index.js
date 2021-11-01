import { Container, ContainerAC, ContainerQA, LogoBackground, TitleCon } from './styled'
import QueueAgents from "../QueueAgents"
import ActiveCalls from "../ActiveCalls"
import Subs from '../Subs'

export default ({ dataDash }) => {
    function activeCallsOn() {
        if (dataDash.active_calls[0] != undefined) {
            return <ContainerAC>
                <TitleCon>Fila de Atendimento:</TitleCon>
                <ActiveCalls user="Técnicos:" time_called="Tempo:" phone="Telefone:" />
                {dataDash.active_calls.map((item, key) => (
                    <ActiveCalls user={item.user} time_called={item.time_called} phone={item.phone} key={key} />
                ))}
            </ContainerAC>
        }
    }

    function QueueAgentsOn() {
        if (dataDash.queue_agents[0] != undefined) {
            return <ContainerQA>
                <TitleCon>Histórico de Atendimento:</TitleCon>
                <QueueAgents user="Técnicos:" abandoned="Abandonadas:" answered="Atendidas:" status="Cabeçalho" />
                {dataDash.queue_agents.map((item, key) => (
                    <QueueAgents user={item.user} 
                    abandoned={item.abandoned} 
                    answered={item.answered} 
                    status={item.status} 
                    logged={item.logged} key={key} />
                ))}
                <Subs></Subs>
            </ContainerQA>
        }
    }

    return (
        <Container>
            <LogoBackground />
            {activeCallsOn()}
            {QueueAgentsOn()}
        </Container>
    )
}