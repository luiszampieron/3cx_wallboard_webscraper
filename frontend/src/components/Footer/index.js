import {FooterDiv, Title, Img} from './styled'
import logo from '../../img/LogoDigisatBranco.png'

function Footer({dataDash}) {
    return (
        <FooterDiv>
            <Title>
                {dataDash.msg.toUpperCase()}
            </Title>
            <Img src={logo}/>
            
        </FooterDiv>
    )
}

export default Footer