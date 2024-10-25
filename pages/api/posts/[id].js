import { databases } from '../../../lib/appwrite'

// API handler for fetching a single blog post by ID
export default async function handler(req, res) {
  const { id } = req.query // Extract the post ID from the query parameters

  if (req.method === 'GET') { // Check if the request method is GET
    try {
      // Fetch the document with the specified ID from the database
      const response = await databases.getDocument('67193249000916336245', '671a8b330000c6858968', id)
      console.log(response) // Log the fetched document for debugging
      res.status(200).json(response) // Send the document as a JSON response
    } catch (error) {
      console.error('Error fetching post:', error) // Log any errors
      res.status(500).json({ error: 'Failed to fetch post' }) // Send a 500 error response
    }
  } else {
    res.setHeader('Allow', ['GET']) // Allow only GET requests
    res.status(405).end(`Method ${req.method} Not Allowed`) // Send a 405 error for other methods
  }
}
