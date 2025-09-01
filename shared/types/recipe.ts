import type { ObjectId } from 'mongodb';

export interface BaseRecipe {
  schemaVersion: number;
  name: string;
  description: string;
  tags?: string[];
  imageKey?: string; // S3 object key for the recipe's main image
  preparationTimes?: {
    prep: number; // in minutes
    cook: number; // in minutes
    total: number; // in minutes
  };
  servings: number;
  contributorId: number;
  submittedUnix: number;
  /**
   * Nutritional information per serving in the following order:
   * [calories, fat, sugar, sodium, protein, saturatedFat, carbohydrates]
   */
  nutrition: (number | null)[];
  steps: string[];
  ingredients: string[];
}

// This represents a recipe as stored in MongoDB (includes _id)
export type RecipeDocument = BaseRecipe & { _id: ObjectId };
