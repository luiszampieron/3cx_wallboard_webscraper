import styled from "styled-components";

const Section = styled.div`
    display: flex;

    height: 3vh;
    width: 98%;
    margin: 3px 1% 0 1%;

    align-items: center;

    white-space: nowrap;

    background-color: ${props => {
        switch(props.status) {
            case 'Disponível':
                return '#37E442;'
            case 'Ausente':
                return '#FFC107;'
            case 'Deslogado':
                return '#636363;'
            case 'Atendimento':
                return '#E63946;'
            case 'Ocupado':
                return '#f3722c;'
            default:
                return '#636363;'
        }
    }}};
    color: ${props => {
        if(props.status === 'Deslogado' || props.status === 'Cabeçalho') {
            return '#EEEEEE;'
        } else {
            return '#000000;'
        }
    }};
`

const Logged = styled.span`
display: flex;
align-items: center;
justify-content: center;
color: #000000;
width: 15px;
height: 100%;
`

const Title = styled.span`
    flex: 2;
    margin-left: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
`

const Data = styled.span`
    flex: 1;
    margin-left: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
`


export  {Section, Logged, Title, Data}