const basicFetch = async (endpoint) => {
   const req = await fetch(endpoint)
   const json = await req.json()
   return json
}

export default async () => {
   const geral = await basicFetch("http://localhost:4000/api")
   const media_geral = await basicFetch("http://192.168.0.10:5000/api/Ura/MediaGeral/")
   const media_tecnicos = await basicFetch("http://192.168.0.10:5000/api/Ura/MediaTecnicos/")

   const api = {
      active_calls: geral.active_calls,
      queue_agents: geral.queue_agents,
      queue_stats: geral.queue_stats,
      overall_average: media_geral,
      technicians_average: media_tecnicos
   }
   return api
}
