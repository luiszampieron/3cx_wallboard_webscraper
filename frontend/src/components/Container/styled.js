import styled from "styled-components";

const Container = styled.section`
  display: flex;
  margin-top: 3vh;
`;

const ConQS = styled.article`
  width: 16.6%;
`;

const Con = styled.article`
  position: relative;
  width: 41%;
  margin-left: 0.7%;

  background-color: #ffffff;
  border-radius: 8px;
`;

const Inner = styled.div`
  height: ${(props) => {
    if (props.size === "47") {
      return "47vh";
    } else {
      return "55vh";
    }
  }};
  overflow: auto;

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  ::-webkit-scrollbar-button {
    width: 21px;
    height: 21px;
  }
  ::-webkit-scrollbar-thumb {
    background: #4f4f4f;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #575757;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #5c5c5c;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border: 0px none #ffffff;
    border-radius: 11px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-track:active {
    background: #ffffff;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

const TitleCon = styled.h3`
  display: flex;
  height: 5vh;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;

  color: #ffffff;
  background-color: #00a859;

  border-radius: 8px 8px 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Container, ConQS, Con, TitleCon, Inner };
