import styled from "styled-components"

const Footer = styled.menu`
    display: flex;
    height: 15vh;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    white-space: nowrap;
    overflow-x: hidden;
`

const Container = styled.div`
    display: flex;
    height: 10vh;
    flex: 1;

    margin: 5px 5px 5px 5px;
    border-radius: 4px;

    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: ${props => {
        switch(props.color){
            case 'blue':
                return '#219EBC;'
            case 'green':
                return '#44bd32;'
            case 'red':
                return '#e74c3c;'
            case 'orange':
                return '#FFB703;'
        }}}
`

export {Footer, Container}