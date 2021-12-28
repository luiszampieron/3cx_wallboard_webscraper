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
    <Cabecalho>
      <Time>
        <Clock date={new Date()} />
      </Time>
      <Title>PAINEL GERAL DOS ATENDIMENTOS</Title>
      <Weather>
        {weather?.Temperature?.Metric.Value && true ? (
          <>
            <Clima>
              <Temp>{weather.Temperature.Metric.Value}</Temp>
              <Graus style={{ paddingTop: 5 }}>ºC</Graus>
            </Clima>
            <Info>
              <span>{weather.WeatherText}</span>
              <span style={{ paddingTop: 5 }}>
                Umidade: {weather.RelativeHumidity}%
              </span>
              <span style={{ paddingTop: 5 }}>
                Vento: {weather.Wind.Speed.Metric.Value} Km/h
              </span>
            </Info>
          </>
        ) : (
          <div />
        )}
      </Weather>
    </Cabecalho>
  );
}

export default Header;
