import styled from 'styled-components'


const Cabecalho = styled.header`
    padding: 0 20px 0 20px;
    display: flex;
    height: 10vh;

    justify-content: space-between;

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

const Time = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #046AAC;
    flex-basis: 15%;
    border-radius: 0 0 25px 25px;
`


const Weather = styled.div`
    display: flex;
    padding-left: 10px;
    align-items: center;
    justify-content: center;
    background-color: #046AAC;
    flex-basis: 15%;
    border-radius: 0 0 25px 25px;
    color: #fff;
`


const Clima = styled.div`
    display: flex;
    align-items: flex-start;
`

const Temp = styled.span`
    font-size: 40px;
`

const Graus = styled.span`
    font-size: 15px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 12px;
`


export { Cabecalho, Title, Weather, Time, Temp, Graus, Clima, Info }