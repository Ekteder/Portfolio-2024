import { Client, Databases, Account } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('6719322e0033111c39d1'); // Replace with your project ID

export const databases = new Databases(client);
export const account = new Account(client);


