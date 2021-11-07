import { Section, Legend, Data, Color, Title } from "./styled"

const Subs = () => {
    return (
        <Section >
            <Title>
                STATUS DOS TÉCNICOS
            </Title>
            <Legend>
                <Color status="Disponível" />
                <Data status="Disponível">DISPONÍVEL</Data>
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

export default Subs