import styled from "styled-components";

const Section = styled.div`
    display: flex;
    
    height: 8.5vh;
    width: 39%;

    flex-direction: column;
    
    position: absolute;
    bottom: 0;

    margin: 1vh 0.5% 1vh 0.5%;
    border-radius: 10px;

    background-color: #D7d7da;
    white-space: nowrap;
`

const Legend = styled.div`
    display: flex;
    flex: 1;
    
    margin: 0 3% 1vh 3%;

    align-items: center;
    justify-content: space-between;

`


const Title = styled.span`
display: flex;
flex: 1;
font-size: 17px;
color: #0C568A;

align-items: center;
justify-content: center;
`


const Data = styled.span`
    position: relative;
    color: #4B4B4D;
    font-size: 10px;
    margin: 0 5px 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Color = styled.span`
    width: 25px;
    height: 25px;
    background-color: ${props => {
            switch (props.status) {

                case 'Disponível':
                    return '#00A859;'
                case 'Ocupado':
                    return '#C52C4D;'
                case 'Ausente':
                    return '#F58634;'
                case 'Deslogado':
                    return 'rgba(114,115,118,1);'
                case 'Atendimento':
                    return '#26999C;'
                default:
                    return '#0098DA;'
            }
        }}};
    }
`

export { Section, Legend, Title, Data, Color }