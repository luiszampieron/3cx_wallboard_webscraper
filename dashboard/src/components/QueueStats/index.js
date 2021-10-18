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
                        <span>Média de Atendimento:</span>
                        <SpanYellow>{average_talking_time}</SpanYellow>
                </Container>
            </Footer>
        </div>
    )
}