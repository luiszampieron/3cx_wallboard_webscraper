import styled from "styled-components";

const Section = styled.div`
    display: flex;
    height: 7vh;
    width: 100%;
    background-color: #FFFFFF;

    position: sticky;
    top: 5vh;  

    align-items: center;
    white-space: nowrap;
`

const Title = styled.span`
    flex: 1.5;
    color: #046AAC;
    margin-left: 10px;
    font-size: 17px;
    padding-top: 4px;

    overflow: hidden;
    text-overflow: ellipsis;
    
`

const Time = styled.span`
    flex: 0.5;
    color: #046AAC;
    margin-left: 10px;
    padding-top: 4px;

    overflow: hidden;
    text-overflow: ellipsis;
`

const Phone = styled.span`
    flex: 1;
    color: #046AAC;
    margin-left: 10px;
    padding-top: 4px;

    overflow: hidden;
    text-overflow: ellipsis;
`

export  {Section, Title, Time, Phone}