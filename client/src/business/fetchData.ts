export const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:4000/v1/pieterpad')

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    const json = await response.json()

    return json.data
  } catch (error) {
    console.log('error in fetching data', error)
  }
}
