import axios, { AxiosResponse } from 'axios'
import { Stage } from './models'

export const fetchData = async (): Promise<Stage[] | null> => {
  try {
    const response: AxiosResponse<{ data: Stage[] }> = await axios.get(
      'http://localhost:4000/v1/pieterpad'
    )
    const data: Stage[] = response.data.data

    return data
  } catch {
    console.log(`Request failed`)
    return null
  }
}
