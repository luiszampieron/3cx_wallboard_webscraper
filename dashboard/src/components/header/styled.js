import styled from 'styled-components'

const Cabecalho = styled.header`
    display: flex;
    height: 10vh;
    width: 100%;

    background-color: #333333;
    justify-content: center;
    box-shadow: 0 0 20px #000000;
    
`

const Container = styled.div`
    display: flex;  
    align-items: center;
`

const Logo = styled.img`
    width: auto;
    height: auto;
    padding: 10px 0 3px 0;
`

const Title = styled.h1`
    color: #EEEEEE;
    font-style: italic;
    font-size: 50px;
    
`

export {Cabecalho, Container, Logo, Title}