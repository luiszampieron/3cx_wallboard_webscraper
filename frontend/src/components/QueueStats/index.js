import {Align, Menu, Container, Span } from './styled'

export default ({waiting, serviced, abandoned, average_talking_time, ligacaoesAvaliadas, notaGeral}) => {
    return(
            <Menu>
                <Container color="orange" margin>
                        <Span size="20">AGUARDANDO:</Span>
                        <Span size="30">{waiting}</Span>
                </Container>
                <Container color="green">
                        <Span size="20">ATENDIDAS:</Span>
                        <Span size="30">{serviced}</Span>
                </Container>
                <Container color="red">
                        <Span size="20">PERDIDAS:</Span>
                        <Span size="30">{abandoned}</Span>
                </Container>
                <Container color="aqua">
                        <Span size="17">MÉDIA ATENDIDA:</Span>
                        <Span size="30">{average_talking_time}</Span>
                </Container>
                <Container color="golden">
                        <Span size="17">LIGAÇÕES AVALIADAS:</Span>
                        <Span size="30">{ligacaoesAvaliadas}</Span>
                </Container>
                <Container color="blue">
                        <Span size="17">NOTA GERAL:</Span>
                        <Span size="30">{notaGeral}</Span>
                </Container>
            </Menu>
    )
}