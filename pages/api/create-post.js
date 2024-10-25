import { databases } from '../../lib/appwrite'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, title, content, imageUrl, author } = req.body

    if (!id) {
      return res.status(400).json({ error: 'ID is required' })
    }

    try {
      console.log('Received data:', { id, title, content, imageUrl, author }) // Add this line for debugging
      const response = await databases.createDocument(
        '67193249000916336245', // Your database ID
        '671a8b330000c6858968', // Your collection ID
        id,
        { 
          id, // Include id in the document data
          title, 
          content, 
          imageUrl, 
          author, 
          createdAt: new Date().toISOString() 
        }
      )
      console.log('Document created successfully:', response) // Add this line for debugging
      res.status(201).json(response)
    } catch (error) {
      console.error('Error creating post:', error)
      res.status(500).json({ error: `Failed to create post: ${error.message}` })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
