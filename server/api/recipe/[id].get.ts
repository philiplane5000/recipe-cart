import type { H3Event } from 'h3';
import { defineEventHandler } from 'h3';
import type { Collection } from 'mongodb';
import { ObjectId } from 'mongodb';

export default defineEventHandler(async (event: H3Event) => {
  const db = event.context.db;
  if (!db) {
    throw createError({
      statusCode: 500,
      message: 'Database connection is not available',
    });
  }
  const collection: Collection<RecipeDocument> = db.collection(
    process.env.NUXT_MONGODB_COLLECTION_NAME || 'recipes'
  );

  try {
    const id = event.context.params?.id;
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Recipe ID is required',
      });
    }

    // Fetch the recipe by its ID
    const recipe = await collection.findOne({ _id: new ObjectId(id) });
    if (!recipe) {
      throw createError({
        statusCode: 404,
        message: 'Recipe not found',
      });
    }

    return recipe; // Return the found recipe
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch recipes',
    });
  }
});
