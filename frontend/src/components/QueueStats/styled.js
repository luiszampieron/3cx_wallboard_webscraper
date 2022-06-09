import styled from "styled-components";

const Menu = styled.menu`
  display: flex;
  flex-direction: column;
  height: 100%;

  color: #ffffff;
  justify-content: center;
  align-items: center;

  overflow-x: hidden;
`;

const Container = styled.div`
    display: flex;
    height: 11vh;
    width: 100%;
    margin-top: ${(props) => (props.margin ? "0;" : "1vh;")}
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    border-radius: 10px;

    
    background-color: ${(props) => {
      switch (props.color) {
        case "blue":
          return "#0098DA;";
        case "green":
          return "#00A859;";
        case "red":
          return "#C52C4D;";
        case "orange":
          return "#F58634;";
        case "golden":
          return "#C6963C;";
        case "aqua":
          return "#26999C;";
        default:
          return "#FFFFFF";
      }
    }}
`;

const Span = styled.span`
    margin-top: 0.7vh;
    font-size: ${(props) => {
      switch (props.size) {
        case "17":
          return "17px;";
        case "20":
          return "20px;";
        case "30":
          return "30px;";
        default:
          return "17px";
      }
    }}
    text-align: center;
`;

export { Menu, Container, Span };
