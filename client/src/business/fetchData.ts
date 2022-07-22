export const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:4000/v1/pieterpad')

    const json = await response.json()

    return json.data
  } catch (error) {
    console.log('error in fetching data')
    return null
  }
}
