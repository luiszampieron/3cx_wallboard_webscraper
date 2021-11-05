import styled from "styled-components";

const Section = styled.div`
    display: flex;

    height: 7vh;
    width: 100%;

    align-items: center;
    white-space: nowrap;

    background-color: #FFFFFF;

    position: sticky;
    top: 5vh;

    color: ${props => {
        if(props.status === 'Deslogado' || props.status === 'Cabeçalho') {
            return '#EEEEEE;'
        } else {
            return '#000000;'
        }
    }};
`

const Stats = styled.span`
    margin-left: 5px;
    height: 90%;
    width: 10%;
`

const Title = styled.span`
    flex: 2;
    color: #046AAC;
    font-size: 17;
    padding-top: 4px;

    overflow: hidden;
    text-overflow: ellipsis;
`

const Data = styled.span`
    flex: 1;
    color: #046AAC;

    text-align: center;
    padding-top: 4px;

    overflow: hidden;
    text-overflow: ellipsis;
`

const Nota = styled.span`
    flex: 0.5;
    color: #046AAC;

        
    text-align: center;
    padding-top: 4px;

    overflow: hidden;
    text-overflow: ellipsis;
`


export  {Section, Title, Data, Nota, Stats}