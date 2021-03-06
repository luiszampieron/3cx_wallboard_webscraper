import styled from "styled-components";

const Section = styled.div`
    display: flex;

    height: 5vh;
    width: 100%;

    background-color: #FFFFFF;
    align-items: center;

    white-space: nowrap;

 
    border-top: 1px solid #e0e0e0;
`

const Title = styled.span`
    flex: 1.5;
    color: #4B4B4D;
    margin-left: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
    
`

const Time = styled.span`
    flex: 0.5;
    color: #4B4B4D;
    margin-left: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
`

const Phone = styled.span`
    flex: 1;
    color: #4B4B4D;
    margin-left: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
`

export  {Section, Title, Time, Phone}