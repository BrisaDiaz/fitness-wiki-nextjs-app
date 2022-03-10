import prisma from '@/lib/prisma'
export default async function handler(req, res) {
  if (req.method === 'GET') {
    return handleGet(req, res)
  }
  return res.status(405).json({ success: false, message: 'Method not allowed' })
}

/// creates a new  collection

//// get all the user collections data
async function handleGet(req, res) {
  const { offset, number } = req.query

  try {
    const collections = await prisma.collection.findMany({
      skip: offset * 1 || undefined,
      take: number * 1 || undefined,

      orderBy: {
        updatedAt: 'desc'
      }
    })

    return res.status(200).json({
      success: true,
      data: collections
    })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, message: 'Server side error' })
  }
}
