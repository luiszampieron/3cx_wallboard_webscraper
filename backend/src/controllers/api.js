let value = { active_calls: [], queue_agents: [], queue_stats: [] };
let previsao_do_tempo = {};
let mensagem = { msg: "" };
let filaAusentes = [];

module.exports.api_salvar = function (application, req, res) {
  const items = req.body;
  if (items.queue_agents) {
    items.queue_agents.forEach((item) => {
      const existsFila = filaAusentes.find((user) => user.user == item.user);
      if (item.status == "Ausente" || item.status == "Ocupado") {
        if (!existsFila) {
          item.offline_time = new Date();
          filaAusentes.push({ user: item.user, time: item.offline_time });
        } else {
          item.offline_time = existsFila.time;
        }
      } else {
        const index = filaAusentes.findIndex((user) => user.user == item.user);
        if (index >= 0) {
          filaAusentes.splice(index, 1);
        }
        item.offline_time = "";
      }

      return item;
    });
  }

  value = items;
  res.send(value);
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
  res.json(previsao_do_tempo);
};

module.exports.api_previsao_tempo_request = function (application, req, res) {
  previsao_do_tempo = req.body;
  res.json(req.body);
};
