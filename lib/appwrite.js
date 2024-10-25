import { Client, Databases } from 'appwrite'

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('6719322e0033111c39d1') // Your project ID

export const databases = new Databases(client)
