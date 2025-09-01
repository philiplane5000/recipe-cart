import type { H3Event } from 'h3';
import { defineEventHandler } from 'h3';
import type { Collection } from 'mongodb';

export default defineEventHandler(async (event: H3Event) => {
  const db = event.context.db;

  if (!db) {
    throw createError({
      statusCode: 500,
      message: 'Database connection is not available',
    });
  }

  const newRecipe = await readBody<BaseRecipe>(event);
  if (!newRecipe) {
    throw createError({
      statusCode: 400,
      message: 'Invalid recipe data',
    });
  }

  try {
    const collection: Collection<RecipeDocument> = db.collection(
      process.env.NUXT_MONGODB_COLLECTION_NAME || 'recipes'
    );
    const recipeToInsert = {
      ...newRecipe,
      schemaVersion: 1,
      submittedUnix: Math.floor(Date.now() / 1000),
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await collection.insertOne(recipeToInsert as any);

    const insertedRecipe: RecipeDocument = {
      ...recipeToInsert,
      _id: result.insertedId,
    };

    return {
      message: 'Recipe inserted successfully',
      recipeId: insertedRecipe._id,
    };
  } catch (error) {
    console.error('Error inserting recipe:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to insert recipe',
    });
  }
});
