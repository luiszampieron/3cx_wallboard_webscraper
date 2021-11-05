import { Section, Legend, Data, Color, Title } from "./styled"

export default () => {
    return (
        <Section >
            <Title>
                STATUS DOS TÉCNICOS
            </Title>
            <Legend>
                <Color status="Disponível" />
                <Data>DISPONÍVEL</Data>
                <Color status="Ausente" />
                <Data>AUSENTE</Data>
                <Color status="Ocupado" />
                <Data>OCUPADO</Data>
                <Color status="Atendimento" />
                <Data>EM ATENDIMENTO</Data>
                <Color status="Deslogado" />
                <Data>OFF</Data>
            </Legend>

        </Section>
    )
}