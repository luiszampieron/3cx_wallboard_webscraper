import styled from "styled-components";

const Section = styled.div`
    display: flex;

    height: 3vh;
    width: 98%;
    margin: 3px 1% 0 1%;

    background-color: #636363;
    align-items: center;

    white-space: nowrap;

    &:after {
        content: ' ';
        width: 10px;
        height: 100%;
        background-color: ${props => props.logged ? "#00ff48" : "ff0000"};
    }
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


export  {Section, Title, Data}