import { Footer, Container, SpanGreen, SpanRed, SpanYellow } from './styled'

export default ({waiting, serviced, abandoned, longest_waiting, average_waiting_time, average_talking_time}) => {
    return(
        <div>
            <Footer>
                <Container color="orange">
                        <span>Aguardando:</span>
                        <span>{waiting}</span>
                </Container>
                <Container color="green">
                        <span>Atendidas:</span>
                        <span>{serviced}</span>
                </Container>
                <Container color="red">
                        <span>Abandonadas:</span>
                        <span>{abandoned}</span>
                </Container>
                <Container color="blue">
                        <span>Média de Atendimento:</span>
                        <span>{average_talking_time}</span>
                </Container>
            </Footer>
        </div>
    )
}