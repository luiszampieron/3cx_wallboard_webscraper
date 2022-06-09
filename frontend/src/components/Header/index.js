import {
  Cabecalho,
  Title,
  Weather,
  Time,
  Temp,
  Graus,
  Clima,
  Info,
} from "./styled";
import Clock from "./Clock";

function Header({ weather }) {
  return (
    <div>
      <Cabecalho>
        <Time>
          <Clock date={new Date()} />
        </Time>
        <Title>PAINEL GERAL DOS ATENDIMENTOS</Title>
        <Weather>
          {weather?.temp && true ? (
            <>
              <Clima>
                <Temp>{weather?.temp}</Temp>
                <Graus style={{ paddingTop: 5 }}>ºC</Graus>
              </Clima>
              <Info>
                <span>{weather?.description}</span>
                <span style={{ paddingTop: 5 }}>
                  Umidade: {weather?.humidity}%
                </span>
                <span style={{ paddingTop: 5 }}>
                  Vento: {weather?.wind_speedy}
                </span>
              </Info>
            </>
          ) : (
            <div />
          )}
        </Weather>
      </Cabecalho>
    </div>
  );
}

export default Header;
