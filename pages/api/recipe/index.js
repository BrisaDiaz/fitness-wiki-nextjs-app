import withAuthorization from '@/middleware/withAuthorization'
import { getData } from '@/utils/spoonacularFetchConfig'

async function handler(req, res) {
  if (req.method === 'GET') {
    return handleGet(req, res)
  }
  return res.status(405).json({ success: false, message: 'Method not allowed' })
}
//// returns  all the recipes  from the external api associated  to the user collections
async function handleGet(req, res) {
  const query = new URLSearchParams(req.query).toString()

  try {
    const { results, totalResults } = await getData('complexSearch', query)

    return res.status(200).json({
      success: true,
      results,
      totalResults
    })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Server side error' })
  }
}

export default withAuthorization(handler)
