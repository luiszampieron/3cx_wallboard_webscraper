import { Title, Time, Container, Phone } from "./styled"

export default ({user, time_called, phone}) => {
    return (
        <Container>
            <Title>Técnico: {user}</Title>
            <Time>Tempo: {time_called}</Time>
            <Phone>Telefone: {phone}</Phone>
        </Container>
    )
}