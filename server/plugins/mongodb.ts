import type { Db as TDatabase, MongoClient as TMongoClient } from 'mongodb';
import { MongoClient } from 'mongodb';

// Global variables to hold the client and database connection
let client: TMongoClient;
let db: TDatabase;

export default defineNitroPlugin(async nitroApp => {
  // Only connect in a production or dev environment, not in a test or static build
  if (!process.env.NUXT_MONGODB_URI) {
    console.warn('MongoDB URI not found. Skipping database connection.');
    return;
  }

  try {
    client = new MongoClient(process.env.NUXT_MONGODB_URI);
    await client.connect();
    db = client.db(process.env.NUXT_MONGODB_DB_NAME);

    // Make the DB instance available to all API routes
    nitroApp.hooks.hook('request', event => {
      event.context.db = db;
    });

    console.log('Successfully connected to MongoDB database 🔌');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
});
