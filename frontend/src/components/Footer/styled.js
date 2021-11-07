import styled from 'styled-components'

const FooterDiv = styled.footer`
    display: flex;
    height: 15vh;
    
    width: 98.6%;
    margin: 0 0.7% 0 0.7%;

    align-items: center;

    white-space: nowrap;
`

const Title = styled.span`
    display: flex;

    width: 90%;
    height: 80%;
    font-size: 2rem;

    margin: 0 10px 0 0;
    padding: 0 10px 0 10px;

    overflow-x: auto;

    background-color: #046AAC;
    border-radius: 15px 15px 15px 15px;

    align-items: center;

    color: #FFFFFF;

    ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
      }
      ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }
      ::-webkit-scrollbar-thumb {
        background: #ffffff;
        border: 0px none #ffffff;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #ededed;
      }
      ::-webkit-scrollbar-thumb:active {
        background: #ffffff;
      }
      ::-webkit-scrollbar-track {
        background: #0098da;
        border: 0px none #ffffff;
        border-radius: 31px;
      }
      ::-webkit-scrollbar-track:hover {
        background: #0098da;
      }
      ::-webkit-scrollbar-track:active {
        background: #0098da;
      }
`

const Img = styled.img`

    width: 9rem;
    height: 3rem;
`

export {FooterDiv, Title, Img}