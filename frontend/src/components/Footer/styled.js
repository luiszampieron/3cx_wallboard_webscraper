import styled from "styled-components";

const FooterDiv = styled.footer`
  display: flex;

  flex: 1;
  height: 14vh;
  margin-top: 1vh;

  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: auto;
  height: 71%;

  top: 0;

  padding: 10px;
`;

const FristCard = styled.div`
  display: flex;
  height: 11vh;
  width: 16.6%;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  overflow: hidden;

  margin-right: 0.7%;
  border-radius: 10px;

  background-color: #deb202;
`;

const AusentesCards = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  height: 11vh;

  ::-webkit-scrollbar {
    width: 3px;
    height: 5px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ffffff;
    border: 0px none #ffffff00;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #888888;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #ffffff;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff00;
    border: 0px none #ffffff00;
    border-radius: 11px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #ffffff00;
  }
  ::-webkit-scrollbar-track:active {
    background: #ffffff00;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  width: 200px;
  height: 100%;
  margin-right: 10px;
  border-radius: 10px;
  min-width: 200px;
  max-width: 200px;

  background-color: #deb202;

  color: #ffffff;

  overflow: hidden;
`;

export { FooterDiv, Img, FristCard, AusentesCards, Card };
