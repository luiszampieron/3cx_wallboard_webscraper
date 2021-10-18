import styled from 'styled-components'


const Cabecalho = styled.header`
    display: flex;
    height: 10vh;
    width: 100%;

    background-color: #333333;
    justify-content: center;
    box-shadow: 0 0 20px #000000;
`

const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    font-family: 'Bebas Neue', cursive;
    font-style: italic;
    color: #D2D4D4;
    font-size: 60px;
`

const Container = styled.div`
    display: flex;  
    align-items: center;
`

const Logo = styled.img`
    width: auto;
    height: auto;
    padding: 10px 0 3px 0;
    margin-left: 10px;
`

export {Cabecalho, Title, Container, Logo}