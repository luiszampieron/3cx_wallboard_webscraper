import styled from "styled-components";

const Section = styled.div`
    display: flex;

    height: 3vh;
    width: 98%;
    margin: 3px 1% 0 1%;

    background-color: #636363;
    align-items: center;

    white-space: nowrap;
`

const Logged = styled.span`
display: flex;
align-items: center;
justify-content: center;
color: #000000;
width: 15px;
height: 100%;

background-color: ${props => {
    switch(props.status) {
        case 'Disponível':
            return '#00ff48'
            break
        case 'Ausente':
            return 'yellow'
            break
        case 'Deslogado':
            return '#8f8f8f'
            break
        case 'Atendimento':
            return '#7300ff'
            break
        default:
            return ''
    }
}}};
`

const Title = styled.span`
    flex: 2;
    color: #EEEEEE;
    margin-left: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
`

const Data = styled.span`
    flex: 1;
    color: #EEEEEE;
    margin-left: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
`


export  {Section, Logged, Title, Data}