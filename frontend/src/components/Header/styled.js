import styled from "styled-components";

const Cabecalho = styled.header`
  display: flex;
  flex: 1;
  height: 10vh;

  justify-content: space-between;

  font-size: 1.6rem;
`;

const Title = styled.h1`
  display: flex;

  width: 50%;

  background-color: #046aac;
  border-radius: 0 0 25px 25px;

  align-items: center;
  justify-content: center;

  color: #ffffff;

  overflow: hidden;
  text-align: center;
`;

const Time = styled.div`
  display: flex;
  width: 15%;

  justify-content: center;
  align-items: center;

  background-color: #046aac;
  border-radius: 0 0 25px 25px;

  overflow: hidden;
`;

const Weather = styled.div`
  display: flex;
  width: 15%;

  align-items: center;
  justify-content: center;

  background-color: #046aac;
  border-radius: 0 0 25px 25px;

  color: #ffffff;

  overflow: hidden;
`;

const Clima = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Temp = styled.span`
  font-size: 40px;
`;

const Graus = styled.span`
  font-size: 15px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  font-size: 12px;
`;

export { Cabecalho, Title, Weather, Time, Temp, Graus, Clima, Info };
