import React from 'react'
import { FooterDiv, Title, Span, Img } from './styled'
import logo from '../../img/LogoDigisatBranco.png'

function Footer({ dataDash }) {
    return (
        <FooterDiv>
            <Title>
                    {dataDash.msg ? <marquee style={{padding: 10}} scrollamount={3}>{dataDash.msg.toUpperCase()}</marquee> : ''}
            </Title>
            <Img src={logo} />

        </FooterDiv>
    )
}

export default React.memo(Footer)