import styled from "styled-components"

const Footer = styled.footer`
    display: flex;
    background-color: #333333;
    height: 15vh;
    box-shadow: 0 0 20px #000000;

    color: #EEEEEE;
    justify-content: center;
    font-size: 2.3vw;

    white-space: nowrap;
    overflow-x: hidden;
`

const Container = styled.div`
    display: flex; 
    flex-direction: column;

    witdh: 10%;

    align-items: center;
    justify-content: center;
    
    padding: 10px 10px 10px 10px;
`

const SpanRed = styled.span`
    color: #ff0000;
`

const SpanGreen = styled.span`
    color: #00ff48;
`

const SpanYellow = styled.span`
    color: yellow;
`

export {Footer, Container, SpanGreen, SpanRed, SpanYellow}