const API_URL = `https://tsapi.n1eko.com`

async function fetchTSApi(url) {
    const response = await fetch(API_URL + url,{
        method: 'GET',
        headers: {}
    })

  const json = await response.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json
}

export async function getAllUsersForHome(){
    const data = await fetchTSApi('/api/clients')
    return data
}