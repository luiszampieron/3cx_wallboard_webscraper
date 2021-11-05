import styled from "styled-components";

const Section = styled.div`
    display: flex;

    height: 5vh;
    width: 100%;

    align-items: center;
    white-space: nowrap;

    border-top: 1px solid #e0e0e0;

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
    background: ${props => {
        switch(props.status) {
            case 'Disponível':
                return 'linear-gradient(90deg, rgba(0,168,89,1) 0%, rgba(255,255,255,0) 100%);'
            case 'Ausente':
                return 'linear-gradient(90deg, rgba(245,134,52,1) 0%, rgba(255,255,255,0) 100%);'
            case 'Deslogado':
                return 'linear-gradient(90deg, rgba(114,115,118,1) 0%, rgba(255,255,255,0) 100%);'
            case 'Atendimento':
                return 'linear-gradient(90deg, rgba(38,153,156,1) 0%, rgba(255,255,255,0) 100%);'
            case 'Ocupado':
                return 'linear-gradient(90deg, rgba(197,44,77,1) 0%, rgba(255,255,255,0) 100%)'
            default:
                return '#636363;'
        }
    }}};
`

const Title = styled.span`
    flex: 2;
    color: #4B4B4D;
    
    overflow: hidden;
    text-overflow: ellipsis;
`

const Data = styled.span`
    flex: 1;
    color: #4B4B4D;

    text-align: center;

    overflow: hidden;
    text-overflow: ellipsis;
`

const Nota = styled.span`
    flex: 0.5;
    color: #4B4B4D;
    
    text-align: center;

    overflow: hidden;
    text-overflow: ellipsis;
`


export  {Section, Stats, Title, Data, Nota}