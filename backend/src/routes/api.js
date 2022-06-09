module.exports = function (application) {
  application.get("/api/dadosgerais", (req, res) => {
    application.src.controllers.api.api(application, req, res);
  });

  application.post("/api/enviardadosgerais", (req, res) => {
    application.src.controllers.api.api_salvar(application, req, res);
  });

  application.get("/api/mensagem", (req, res) => {
    application.src.controllers.api.api_mensagem(application, req, res);
  });

  application.post("/api/enviarmensagem", (req, res) => {
    application.src.controllers.api.api_mensagem_salvar(application, req, res);
  });

  application.get("/api/previsaotempo", (req, res) => {
    application.src.controllers.api.api_previsao_tempo(application, req, res);
  });

  application.post("/api/previsaotempo/enviar", (req, res) => {
    application.src.controllers.api.api_previsao_tempo_request(
      application,
      req,
      res
    );
  });
};
