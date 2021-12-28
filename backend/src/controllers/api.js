let value = { active_calls: [], queue_agents: [], queue_stats: [] };
let mensagem = { msg: "" };

module.exports.api_salvar = function (application, req, res) {
  res.send(req.body);
  value = req.body;
};

module.exports.api = function (application, req, res) {
  return res.json(value);
};

module.exports.api_mensagem_salvar = function (application, req, res) {
  mensagem = req.body;
  res.redirect("/");
};

module.exports.api_mensagem = function (application, req, res) {
  return res.json(mensagem);
};

module.exports.api_previsao_tempo = function (application, req, res) {
  application.src.utils.previsao_tempo.getPrevisao_tempo(req, res);
};

module.exports.api_previsao_tempo_request = function (application, req, res) {
  application.src.utils.previsao_tempo.getPrevisao_tempo(req, res, "pass");
};
