import axios, { AxiosResponse } from 'axios'
import { Stage } from './models'

export const fetchData = async (): Promise<Stage[] | null> => {
  try {
    const response: AxiosResponse<{ data: Stage[] }> = await axios.get(
      // this client code is running in the browser!
      // not running in the docker container
      // connect to local host
      'http://127.0.0.1:4000/v1/pieterpad'
    )
    const data: Stage[] = response.data.data

    return data
  } catch {
    console.log(`Request failed`)
    return null
  }
}
