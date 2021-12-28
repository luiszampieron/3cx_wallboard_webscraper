let fetch = require("cross-fetch");
let previsao_tempo = "";

module.exports.getPrevisao_tempo = async function (req, res, pass) {
  const date = new Date();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  if ((minutes == 0 && seconds < 10) || previsao_tempo == "" || pass) {
    try {
      const result = await fetch(
        "http://dataservice.accuweather.com/currentconditions/v1/41281?apikey=txQFdfYAjWiqrqzVRTOGtmvU0n1qxobn&language=pt-BR&details=true"
      );
      const json = await result.json();
      previsao_tempo = json[0];
      res.send(previsao_tempo);
    } catch (err) {
      previsao_tempo = "vishh, deu erro!! " + err;
      res.send(previsao_tempo);
    }
  } else {
    res.send(previsao_tempo);
  }
};
