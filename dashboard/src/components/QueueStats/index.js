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
                        <span>Maior tempo de espera:</span>
                        <SpanYellow>{longest_waiting}</SpanYellow>
                </Container>
                <Container>
                        <span>Média de espera:</span>
                        <SpanRed>{average_waiting_time}</SpanRed>
                </Container>
                <Container>
                        <span>Média falando:</span>
                        <SpanGreen>{average_talking_time}</SpanGreen>
                </Container>
            </Footer>
        </div>
    )
}