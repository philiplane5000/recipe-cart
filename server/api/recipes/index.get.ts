import type { RecipeDocument } from '@@/shared/types/recipe';
import type { Collection } from 'mongodb';

export default defineEventHandler(async event => {
  const db = event.context.db;

  if (!db) {
    throw createError({
      statusCode: 500,
      message: 'Database connection is not available',
    });
  }

  const collection: Collection<RecipeDocument> = db.collection(
    process.env.NUXT_MONGODB_COLLECTION_NAME ?? 'recipes'
  );

  try {
    const recipes = await collection.find({}).toArray();
    return recipes; // Return the array of recipes
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch recipes',
    });
  }
});
