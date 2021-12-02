import env from '@/env'
export async function getData(endpoint, query) {
  const config = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Mobile Safari/537.36'
    }
  }
  const url = ` https://api.spoonacular.com/recipes/${endpoint}?apiKey=${env.API_KEY}&${query}`

  const response = await fetch(url, config)
  if (!response.ok)
    throw new Error(`httpError: ${response.status} ${response.statusText}`)

  const json = await response.json()

  return json
}
