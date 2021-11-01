import styled from "styled-components";

const Section = styled.div`
    display: flex;

    height: 3vh;
    width: 98%;
    margin: 3px 1% 0 1%;

    align-items: center;

    white-space: nowrap;

    
`

const Data = styled.span`
    flex: 1;
    position: relative;
    color: #EEEEEE;
    overflow: hidden;
    text-overflow: ellipsis;

    &:after {

        content: '';
        position: absolute;
        width: 15px;
        height: 20px;
        margin-left: 3px;
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
    }
`

export  {Section, Data}