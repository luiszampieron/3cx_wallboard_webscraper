import { Section, Title, Data, Logged } from "./styled"

export default ({user, answered, abandoned, status, logged}) => {
    return (
        <Section>
            <Logged status={status}>{logged && "Q"}</Logged>
            <Title>{user}</Title>
            <Data>{answered}</Data>
            <Data>{abandoned}</Data>
        </Section>
    )
}