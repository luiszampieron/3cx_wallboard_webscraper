import styled from "styled-components"

const Container = styled.section`
  display: inline-flex;
  position: relative;
  height: 80vh;
  width: 100vw;
`

const ContainerAC = styled.article`
  flex: 1;
  position: relative;
  witdh: 50%;
  margin-top: 20px;
`

const ContainerQA = styled.article`
  flex: 1;
  witdh: 50%;
  margin-top: 20px;
`

const TitleCon = styled.h3`
  margin: 10px;
  font-size: 35px;
  color: #EEEEEE;
`


export {Container, ContainerAC, ContainerQA, TitleCon}