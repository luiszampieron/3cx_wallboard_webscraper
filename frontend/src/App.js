import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import api from "./services/api";
import weather from "./services/apiPrevisaoTempo";

function App() {
  const [dataDash, setDataDash] = useState({
    active_calls: [],
    queue_agents: [],
    technicians_average: [],
    queue_stats: {},
    overall_average: {},
    msg: "",
  });

  const [weatherDash, setWeatherDash] = useState({
    weather: {},
  });

  useEffect(() => {
    const loadAll = async function () {
      const requestApi = await api();
      if (dataDash !== requestApi) {
        setDataDash(requestApi);
      }
      const requestWeather = await weather();
      if (weatherDash !== requestWeather) {
        setWeatherDash(requestWeather);
      }
    };

    setInterval(() => {
      loadAll();
    }, 5000);

    loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flex: 1,
        height: "100%",
        flexDirection: "column",
        padding: "0 10px 0 10px",
      }}
    >
      <GlobalStyle />

      <Header weather={weatherDash.weather} />

      <Container dataDash={dataDash} />

      <Footer dataDash={dataDash} />
    </div>
  );
}

export default App;
