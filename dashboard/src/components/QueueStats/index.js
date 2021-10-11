import { Footer, Container, SpanGreen, SpanRed, SpanYellow } from './styled'

export default ({waiting, serviced, abandoned, longest_waiting, average_waiting_time, average_talking_time}) => {
    return(
        <div>
            <Footer>
                <Container>
                        <span>Aguardando:</span>
                        <SpanYellow>{waiting}</SpanYellow>
                </Container>
                <Container>
                        <span>Atendidas:</span>
                        <SpanGreen>{serviced}</SpanGreen>
                </Container>
                <Container>
                        <span>Abandondas:</span>
                        <SpanRed>{abandoned}</SpanRed>
                </Container>
                <Container>
                        <span>Média de espera:</span>
                        <SpanYellow>{average_waiting_time}</SpanYellow>
                </Container>
                <Container>
                        <span>Média de atendimento:</span>
                        <SpanGreen>{average_talking_time}</SpanGreen>
                </Container>
            </Footer>
        </div>
    )
}