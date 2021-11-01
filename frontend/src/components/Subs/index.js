import { Section, Data } from "./styled"

export default () => {
    return (
        <Section >
            <Data status="Disponível">Disponível</Data>
            <Data status="Ausente">Ausente</Data>
            <Data status="Ocupado">Ocupado</Data>
            <Data status="Atendimento">Atendimento</Data>
            <Data status="Deslogado">Deslogado</Data>
        </Section>
    )
}