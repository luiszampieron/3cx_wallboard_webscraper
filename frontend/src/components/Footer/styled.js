import styled from 'styled-components'

const Cabecalho = styled.footer`
    display: flex;
    height: 15vh;

    align-items: center;

    white-space: nowrap;
`

const Title = styled.span`
    display: flex;
    flex: 4;
    margin: 0 10px 0 10px;


    height: 80%;
    font-size: 2rem;


    background-color: #046AAC;
    border-radius: 15px 15px 15px 15px;

    align-items: center;
    justify-content: center;

    color: #FFFFFF;
`

const Img = styled.img`

    width: 9rem;
    height: 3rem;
    margin-right: 10px;
`

export {Cabecalho, Title, Img}