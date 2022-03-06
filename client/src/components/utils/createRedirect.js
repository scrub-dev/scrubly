import { config } from "../config"

export const createRedirect = async (link, customLink) => {
  let url = config.URL + `?url=${link}`
  if(customLink !== undefined) url += `&customlink=${customLink}`
  
  const result = await fetch(url)
  const data = await result.json()

  if(data.status == "FAILED") return data.message
  else return data.id
}