import type { H3Event } from 'h3';
import { createError, defineEventHandler, readBody } from 'h3';
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

  const updatedRecipeData = await readBody<BaseRecipe>(event);
  if (!updatedRecipeData) {
    throw createError({
      statusCode: 400,
      message: 'Invalid recipe data in the request body.',
    });
  }

  let objectId: ObjectId;
  try {
    objectId = new ObjectId(id);
  } catch (error) {
    console.error('Invalid ObjectId:', error);
    throw createError({
      statusCode: 400,
      message: 'Invalid recipe ID format.',
    });
  }

  try {
    const collection: Collection<RecipeDocument> = db.collection(
      process.env.NUXT_MONGODB_COLLECTION_NAME || 'recipes'
    );

    // Create an update document using the $set operator to replace fields
    const result = await collection.updateOne(
      { _id: objectId },
      {
        $set: {
          name: updatedRecipeData.name,
          description: updatedRecipeData.description,
          tags: updatedRecipeData.tags,
          imageKey: updatedRecipeData.imageKey,
          preparationTimes: updatedRecipeData.preparationTimes,
          servings: updatedRecipeData.servings,
          nutrition: updatedRecipeData.nutrition,
          steps: updatedRecipeData.steps,
          ingredients: updatedRecipeData.ingredients,
          // We do not allow changing _id, schemaVersion, submittedUnix, or contributorId
        },
      }
    );

    if (result.matchedCount === 0) {
      throw createError({
        statusCode: 404,
        message: 'Recipe not found.',
      });
    }

    return {
      message: 'Recipe updated successfully',
      recipeId: id,
    };
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to update recipe.',
    });
  }
});
