import { Container, ContainerAC, ContainerQA, LogoBackground, TitleCon } from './styled'
import QueueAgents from "../QueueAgents"
import ActiveCalls from "../ActiveCalls"

export default ({ dataDash }) => {
    function activeCallsOn() {
        if (dataDash.active_calls[0] != undefined) {
            return <ContainerAC>
                <TitleCon>Fila de Atendimento:</TitleCon>
                <ActiveCalls user="Técnico:" time_called="Tempo:" phone="Telefone:" />
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
                <QueueAgents user="Técnico:" abandoned="Abandonada:" answered="Atendida:" />
                {dataDash.queue_agents.map((item, key) => (
                    <QueueAgents user={item.user} abandoned={item.abandoned} answered={item.answered} logged={item.logged} key={key} />
                ))}
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