import type { H3Event } from 'h3';
import { createError, defineEventHandler } from 'h3';
import type { Collection } from 'mongodb';
import { ObjectId } from 'mongodb';

export default defineEventHandler(async (event: H3Event) => {
  const db = event.context.db;
  const id = event.context.params?.id;

  if (!db) {
    throw createError({
      statusCode: 500,
      message: 'Database connection is not available',
    });
  }

  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Recipe ID is missing from the URL.',
    });
  }

  let objectId: ObjectId;
  try {
    objectId = new ObjectId(id);
  } catch (error) {
    console.error('Invalid ObjectId format:', error);
    throw createError({
      statusCode: 400,
      message: 'Invalid recipe ID format.',
    });
  }

  try {
    const collection: Collection<RecipeDocument> = db.collection(
      process.env.NUXT_MONGODB_COLLECTION_NAME || 'recipes'
    );

    const result = await collection.deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
      throw createError({
        statusCode: 404,
        message: 'Recipe not found.',
      });
    }

    return {
      message: 'Recipe deleted successfully',
      recipeId: id,
    };
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to delete recipe.',
    });
  }
});
