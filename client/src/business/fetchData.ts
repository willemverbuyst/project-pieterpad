import axios from 'axios'
import { Stage } from './models'

export const fetchData = async (): Promise<Stage[] | null> => {
  try {
    const response = await axios.get('http://localhost:4000/v1/pieterpad')

    return response.data
  } catch (error) {
    console.log('error in fetching data')
    console.error(error)
    return null
  }
}
