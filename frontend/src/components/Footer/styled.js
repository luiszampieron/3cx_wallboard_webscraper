import styled from 'styled-components'

const FooterDiv = styled.footer`
    display: flex;
    height: 15vh;
    
    width: 98.6%;
    margin: 0 0.7% 0 0.7%;

    align-items: center;

    white-space: nowrap;
`

const Title = styled.div`
    display: flex;

    width: 90%;
    height: 80%;
    font-size: 2rem;

    margin: 0 10px 0 0;
    padding: 0 10px 0 10px;

    overflow-x: auto;

    background-color: #046AAC;
    border-radius: 15px 15px 15px 15px;

    align-items: center;

    color: #FFFFFF;
`

const Span = styled.span`
  padding: 10px 0 10px 0;
`

const Img = styled.img`

    width: 9rem;
    height: 3rem;
`

export {FooterDiv, Title, Span, Img}