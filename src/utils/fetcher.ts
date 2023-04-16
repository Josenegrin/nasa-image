const API_KEY = process.env.KEY
const BASE_URL = process.env.API

const fetcher = async(queryParams?: string) => {
  try {
    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}${queryParams?.length ? queryParams : ''}`)
    const data = await response.json()

    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default fetcher