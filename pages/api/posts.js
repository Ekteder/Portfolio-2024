import { databases } from '../../lib/appwrite'

// API handler for fetching all blog posts
export default async function handler(req, res) {
  if (req.method === 'GET') { // Check if the request method is GET
    try {
      console.log('Fetching documents...')
      // Fetch all documents from the specified database and collection
      const response = await databases.listDocuments('67193249000916336245', '671a8b330000c6858968')
      console.log('Fetched documents:', response.documents) // Add this line for debugging
      res.status(200).json(response.documents) // Send the documents as a JSON response
    } catch (error) {
      console.error('Error fetching posts:', error) // Log any errors
      res.status(500).json({ error: 'Failed to fetch posts' }) // Send a 500 error response
    }
  } else {
    res.setHeader('Allow', ['GET']) // Allow only GET requests
    res.status(405).end(`Method ${req.method} Not Allowed`) // Send a 405 error for other methods
  }
}
