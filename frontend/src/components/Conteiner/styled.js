import styled from "styled-components"


const Container = styled.section`
  display: inline-flex;
  position: relative;
  height: 70vh;
  width: 100%;

  margin: 5vh 0 0 0.7%;
`

const ContainerQS = styled.article`
  width: 17%;
  margin: 0 10px 0 0;

`

const ContainerAC = styled.article`
  width: 40%;
  margin: 0 10px 0 0;
  background-color: #FFFFFF;
  border-radius: 8px;

  overflow: auto;


`

const ContainerQA = styled.article`

  width: 40%;
  margin: 0 10px 0 0;
  background-color: #FFFFFF;
  border-radius: 8px;

  overflow: auto;
`

const TitleCon = styled.h3`
  display: flex;
  height: 5vh;
  align-items: center;
  justify-content: center;
 
  position: sticky;
  top: 0;

  font-size: 1.5rem;

  color: #FFFFFF;
  background-color: #00A859;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const DivTeste = styled.div`
  position: absolute;
`

export {Container, ContainerQS, ContainerAC, ContainerQA, TitleCon, DivTeste}