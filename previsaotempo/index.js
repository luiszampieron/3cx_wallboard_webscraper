const axios = require("axios");

const loadAll = async () => {
  try {
    const result = await axios.get(
      "https://api.hgbrasil.com/weather?woeid=456149;key=1aec3afe"
    );

    const json = await result.data.results;
    await axios.post("http://localhost:4000/api/previsaotempo/enviar", json);
  } catch (err) {
    console.log(err);
  }
};

loadAll();

setInterval(() => {
  loadAll();
}, 3600000);
