import styled from 'styled-components'

const Cabecalho = styled.header`
    display: flex;
    height: 90px;
    width: 100%;

    background-color: #333333;
    justify-content: center;
    
`

const Container = styled.div`
    display: flex;  
    align-items: center;
`

const Logo = styled.img`
    width: auto;
    height: auto;
    padding: 5px 0 5px 0;
`

const Title = styled.h1`
    font-family: sans-serif, Arial; 
    color: #EEEEEE;
    font-style: italic;
    font-size: 3vw;
    
`

export {Cabecalho, Container, Logo, Title}