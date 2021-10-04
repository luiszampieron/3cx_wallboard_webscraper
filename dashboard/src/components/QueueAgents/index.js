import { Title, Serviced, Container } from "./styled"

export default ({user, serviced_abandoned_time}) => {
    return (
        <Container>
            <Title>Técnico: {user}</Title>
            <Serviced>{serviced_abandoned_time}</Serviced>
        </Container>
    )
}