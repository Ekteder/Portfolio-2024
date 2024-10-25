import { Client, Databases, Account } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('6719322e0033111c39d1'); // Replace with your project ID

export const databases = new Databases(client);
export const account = new Account(client);

export const CONTACT_COLLECTION_ID = '6719326f002d19fd2b31'; // Replace with your collection ID
export const DATABASE_ID = '67193249000916336245'; // Replace with your database ID
