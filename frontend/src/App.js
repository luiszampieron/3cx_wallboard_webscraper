import React, { useState, useEffect } from "react";

import GlobalStyle from "./GlobalStyle";
import api from "./services/api";
import weather from "./services/apiPrevisaoTempo";
import Header from "./components/Header";
import Conteiner from "./components/Conteiner";
import Footer from "./components/Footer";

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
    };

    setInterval(() => {
      loadAll();
    }, 5000);

    loadAll();
  }, []);

  useEffect(() => {
    const loadAll = async () => {
      const requestWeather = await weather();
      if (weatherDash !== requestWeather) {
        setWeatherDash(requestWeather);
      }
    };

    setInterval(() => {
      loadAll();
    }, 1800000);

    loadAll();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />

      <Header weather={weatherDash.weather} />

      <Conteiner dataDash={dataDash} />

      <Footer dataDash={dataDash} />
    </div>
  );
}

export default App;
