import styled from 'styled-components'


const Cabecalho = styled.header`
    display: flex;
    height: 10vh;

    justify-content: center;

    white-space: nowrap;
`

const Title = styled.h1`
    display: flex;

    flex-basis: 50%;
    background-color: #046AAC;
    border-radius: 0 0 25px 25px;

    align-items: center;
    justify-content: center;

    color: #FFFFFF;
    font-size: 1.7em;

    overflow: hidden;

    @media(max-width: 1060px) {
        justify-content: start;
    }
`

export {Cabecalho, Title}