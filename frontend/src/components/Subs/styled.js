import styled from "styled-components";

const Section = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: 0;

    height: 8.5vh;
    width: 96%;

    margin: 1vh 2% 1vh 2%;
    border-radius: 10px;

    background-color: #D7d7da;
    white-space: nowrap;
`

const Legend = styled.div`
    display: flex;

    margin: 0 3% 1vh 3%;

    align-items: center;
    justify-content: center;

`


const Title = styled.span`
    display: flex;
    flex: 1;
    font-size: 17px;
    color: #0C568A;

    align-items: center;
    justify-content: center;

    overflow: hidden;
    text-overflow: ellipsis;
`


const Data = styled.span`
    color: #4B4B4D;
    font-size: 70%;

    margin: 0 2% 0 3px;

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
                    return '#727376'
                case 'Atendimento':
                    return '#0098DA;'
        }}};
    }
`

export { Section, Legend, Title, Data, Color }