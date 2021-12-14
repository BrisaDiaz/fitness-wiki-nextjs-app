import env from '../env'
export async function POST(endpoint, data, token) {
  const response = await fetch(`${env.HOST}/api${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${token}`
    }
  })

  const json = await response.json()
  return [json, response]
}
export async function PUT(endpoint, data, token) {
  const response = await fetch(`${env.HOST}/api${endpoint}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${token}`
    }
  })
  const json = await response.json()
  return [json, response]
}
export async function GET(endpoint, token) {
  const response = await fetch(`${env.HOST}/api${endpoint}`, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${token}`
    }
  })
  const json = await response.json()
  return [json, response]
}
export async function DELETE(endpoint, token) {
  const response = await fetch(`${env.HOST}/api${endpoint}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Basic ${token}`
    }
  })
  const json = await response.json()
  return [json, response]
}
