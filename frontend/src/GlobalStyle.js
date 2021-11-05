import {createGlobalStyle} from "styled-components"
import keepcalm from './font/KeepCalm.ttf'
import segoe from './font/Segoe.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: keep-calm;
    src: url(${keepcalm})
  }

  @font-face {
    font-family: segoe;
    src: url(${segoe})
  }

body {
    font-family: keep-calm, segoe, sans-serif;
    background-color: #0C568A;
    overflow: hidden;
  }
`

export default GlobalStyle