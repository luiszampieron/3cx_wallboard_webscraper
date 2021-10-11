import configs from '../../configs'

const basicFetch = async (endpoint) => {
   const req = await fetch(configs.ipMachine + "4000/api")
   const json = await req.json()
   return json
}

export default async () => {
   let result = await basicFetch()
   const api = {
      active_calls: result.active_calls,
      queue_agents: result.queue_agents,
      queue_stats: result.queue_stats
   }
   return api
}