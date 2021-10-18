import {Cabecalho, Container, Logo, Title} from './styled'

function Header() {
    return (
        <Cabecalho>
            <Container>
                <Title>Suporte</Title>
            </Container>
            <Logo src="https://www.digisat.com.br/static/img/logomarca.png"/>
        </Cabecalho>
    )
}

export default Header