import { Section, Title, Data } from "./styled"

export default ({user, answered, abandoned, logged}) => {
    return (
        <Section logged={logged}>
            <Title>{user}</Title>
            <Data>{answered}</Data>
            <Data>{abandoned}</Data>
        </Section>
    )
}