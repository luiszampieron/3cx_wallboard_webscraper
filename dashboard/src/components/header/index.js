import {Cabecalho, Container, Logo, Title} from './styled'

function Header() {
    return (
        <>
            <Cabecalho>
                <Logo src="https://www.digisat.com.br/static/img/logomarca.png"/>
                <Container>
                    <Title>Telão Suporte</Title>
                </Container>
            </Cabecalho>
        </>
    )
}

export default Header