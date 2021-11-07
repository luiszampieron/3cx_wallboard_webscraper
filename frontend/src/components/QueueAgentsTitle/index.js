import { Section, Title, Data, Nota, Stats } from "./styled"

const QueueAgentsTitle = () => {
    return (
        <Section>
            <Stats/>
            <Title>TÉCNICOS</Title>
            <Data>ATENDIDAS</Data>
            <Data>PERDIDAS</Data>
            <Nota>NOTA</Nota>
        </Section>
    )
}

export default QueueAgentsTitle