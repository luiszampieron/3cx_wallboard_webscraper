import styled from "styled-components"
import logomarca from "../../img/logomarca.png"

const Container = styled.section`
  background: url(${logomarca}) center center;
  background-repeat: no-repeat;
  background-size: 60%;

  display: inline-flex;
  position: relative;
  height: 75vh;
  width: 100%;
`

const ContainerAC = styled.article`
  flex: 1;
  margin: 1vh 0 1vh 0;
  witdh: 50%;
  overflow: auto;
`

const ContainerQA = styled.article`
  flex: 1;
  witdh: 50%;
  margin: 1vh 0 1vh 0;
  overflow: auto;
`

const TitleCon = styled.h3`
  margin: 10px;
  font-size: 35px;
  color: #EEEEEE;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const LogoBackground = styled.img`
  width: auto;
  height: auto;
  opacity: 0.5;
  z-index: -1;
`


export {Container, ContainerAC, ContainerQA, TitleCon, LogoBackground}