const basicFetch = async (endpoint) => {
  const req = await fetch(endpoint);
  const json = await req.json();
  return json;
};

const get_data = async () => {
  try {
    const geral = await basicFetch("http://192.168.0.50:4000/api/DadosGerais");
    const media_geral = await basicFetch(
      "http://192.168.0.10:5000/api/Ura/MediaGeral/"
    );
    const media_tecnicos = await basicFetch(
      "http://192.168.0.10:5000/api/Ura/MediaTecnicos/"
    );
    const mensagem = await basicFetch("http://192.168.0.50:4000/api/Mensagem");

    const api = {
      active_calls: geral.active_calls,
      queue_agents: geral.queue_agents,
      queue_stats: geral.queue_stats,
      overall_average: media_geral,
      technicians_average: media_tecnicos,
      msg: mensagem.msg,
    };

    return api;
  } catch (err) {
    console.log(err);
  }

  return false;
};

export default get_data;
