import styled from "styled-components";

const Section = styled.div`
    display: flex;

    height: 5vh;
    width: 98%;
    margin: 3px 1% 0 1%;

    background-color: #636363;
    align-items: center;

    white-space: nowrap;
`

const Title = styled.span`
    flex: 1.5;
    color: #EEEEEE;
    margin-left: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
    
`

const Time = styled.span`
    flex: 0.5;
    color: #EEEEEE;
    margin-left: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
`

const Phone = styled.span`
    flex: 1;
    color: #EEEEEE;
    margin-left: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
`

export  {Section, Title, Time, Phone}