# Gather - Recipe Management App Project Brief

## 🎯 Project Overview

**App Name:** Gather  
**Purpose:** A modern web application that simplifies meal planning by allowing users to curate recipes and automatically generate shopping lists from their weekly meal selections.

**Core Value Proposition:** Seamlessly connect meal planning to grocery shopping with automated list generation.

## 🛠️ Tech Stack

- **Framework**: Nuxt 4 (Vue.js + TypeScript)
- **UI Library**: Nuxt UI
- **CSS Framework**: Tailwind CSS
- **Database**: MongoDB Atlas
- **Architecture**: Atomic Design Pattern
- **Hosting**: AWS Cloud

## ✨ MVP Features (Phase 1)

1. **Recipe Management**
   - Create, edit, delete recipes manually
   - Recipe cards with image, metadata (prep/cook time, servings, difficulty)
   - Basic search functionality

2. **Weekly Meal Planning**
   - Simple calendar interface to assign recipes to days
   - Drag & drop or click-to-assign recipes

3. **Automated Shopping List Generation**
   - Click "Generate Shopping List" from selected weekly recipes
   - Smart consolidation of duplicate ingredients (2 eggs + 3 eggs = 5 eggs)
   - Basic categorization (produce, dairy, meat, pantry)

4. **User Interface**
   - Responsive web design (mobile-first)
   - Clean, intuitive recipe management
   - Fast recipe browsing and selection

## 📊 Core Data Models

```typescript
interface Recipe {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
  rating?: 1 | 2 | 3 | 4 | 5;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
}

interface MealPlan {
  id: string;
  userId: string;
  weekStarting: Date;
  meals: MealSlot[];
}

interface MealSlot {
  date: Date;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  recipeId?: string;
}

interface ShoppingList {
  id: string;
  items: ShoppingItem[];
  generatedFrom: string[]; // recipe IDs
  createdAt: Date;
}

interface ShoppingItem {
  ingredient: string;
  totalQuantity: number;
  unit: string;
  category: string;
  checked: boolean;
}
```

## 🏗️ Component Architecture (Atomic Design)

### Key Components to Build:

**Atoms:**

- Button, Input, Textarea, Tag, Rating, Timer, ServingSize, Difficulty

**Molecules:**

- RecipeSearch, IngredientInput, RecipeMetadata, ShoppingListItem, MealPlanSlot

**Organisms:**

- RecipeCard, RecipeForm, ShoppingList, MealCalendar, RecipeBrowser, WeeklyPlanner

**Templates:**

- DefaultLayout, RecipeLayout, DashboardLayout, PlannerLayout

## 🔌 API Routes (MVP)

```
# Recipe Management
GET    /api/recipes              # Get all user recipes
POST   /api/recipes              # Create new recipe
GET    /api/recipes/:id          # Get specific recipe
PUT    /api/recipes/:id          # Update recipe
DELETE /api/recipes/:id          # Delete recipe

# Meal Planning
GET    /api/meal-plans           # Get user's meal plans
POST   /api/meal-plans           # Create meal plan
PUT    /api/meal-plans/:id       # Update meal plan

# Shopping Lists
GET    /api/meal-plans/:id/shopping-list  # Generate shopping list from meal plan
```

## 📱 Key Pages/Routes

1. **Dashboard** (`/`) - Recipe overview + quick actions
2. **Recipes** (`/recipes`) - Browse/manage all recipes
3. **Recipe Detail** (`/recipes/:id`) - Full recipe view
4. **Create Recipe** (`/recipes/new`) - Recipe creation form
5. **Edit Recipe** (`/recipes/:id/edit`) - Recipe editing
6. **Weekly Planner** (`/planner`) - Meal planning interface
7. **Shopping List** (`/shopping`) - Generated grocery list

## 🎨 Design Priorities

- **Clean & Intuitive**: Easy recipe browsing and selection
- **Mobile-First**: Responsive design for kitchen use
- **Fast Loading**: Optimized images and smooth interactions
- **Visual Recipe Cards**: Attractive recipe presentation
- **Efficient Workflows**: Minimize clicks from recipe to shopping list

## 🚀 Development Phases

### Phase 1: MVP Core (Current Focus)

- Recipe CRUD operations
- Basic meal planning
- Shopping list generation
- User authentication

### Phase 2: Enhanced Experience

- Recipe import from websites
- Advanced search/filtering
- Recipe collections/tags
- Improved shopping list UX

### Phase 3: Smart Features

- AI recipe recommendations
- Grocery store integrations
- Social features
- Mobile app

## 🔧 Development Setup

```bash
# Project setup
git clone <repo-url>
cd gather
npm install
npm run dev  # Start development server

# Key commands
npm run dev          # Development server
npm run build        # Production build
npm run typecheck    # TypeScript checking
npm run lint         # Code linting
```

## 📝 Current Development Status

**✅ Completed:**

- Project setup with Nuxt 4 + Nuxt UI + Tailwind
- Basic project structure with atomic design
- Core TypeScript interfaces defined

**🚧 In Progress:**

- [Add current task here]

**⏭️ Next Tasks:**

- Set up MongoDB connection
- Create basic Recipe model/schema
- Build core Recipe components
- Implement recipe CRUD operations

## 🤔 Key Development Questions/Decisions

1. **Authentication**: Simple email/password vs. social login for MVP?
2. **Image Storage**: Local storage vs. cloud service (Cloudinary/AWS S3)?
3. **Database Schema**: Embedded ingredients vs. separate collection?
4. **Shopping List UX**: Single page vs. modal/sidebar?
5. **Recipe Import**: Which cooking sites to prioritize for scraping?

## 📊 Success Metrics (MVP)

- Users can create and save recipes in < 2 minutes
- Meal planning workflow takes < 1 minute per week
- Shopping list generation is instant and accurate
- Mobile experience is smooth and usable
- 90%+ ingredient consolidation accuracy

## 🔗 Useful Resources

- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Nuxt UI Components](https://ui.nuxt.com/)
- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/)
- [Recipe Microdata Standards](https://developers.google.com/search/docs/appearance/structured-data/recipe)

---

**Project Goal:** Ship a working MVP that solves the core problem of automated shopping list generation from meal plans, with room to grow into advanced features and potential grocery store integrations.

## Schema Validation

- [Zod](---)

That's a fantastic question, and it's a critical next step for building a robust and secure API. Implementing a JSON schema validator will add another layer of security and data integrity to your server routes.

For your Nuxt setup, you would typically define and implement the validator in two main places:

### 1\. Defining the Schema

You'd define the JSON Schema itself in a dedicated, shared directory, such as `~/server/schemas` or `~/shared/types/schemas`. Using a validation library like [Zod](https://zod.dev/) or [Joi](https://joi.dev/) is the standard approach here.

For example, you could create a file like `~/server/schemas/recipeSchema.ts` and define your schema for a `BaseRecipe`:

```typescript
import { z } from 'zod';

export const recipeSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  // ... all other fields
});
```

### 2\. Implementing the Validator

Once defined, you would implement this schema directly within your Nuxt server routes. The `h3` library that Nuxt's server routes are built on has excellent, built-in helpers for this exact purpose.

Instead of using `readBody()`, you would use `readValidatedBody()`. This function takes the event and your schema as arguments. It will automatically parse the body, validate it against the schema, and throw an `H3Error` if the data is invalid, preventing you from ever processing bad data.

So, in your `/api/recipe/[id].put.ts` file, you would change this line:

```typescript
const updatedRecipeData = await readBody<BaseRecipe>(event);
```

To this:

```typescript
import { readValidatedBody } from 'h3';
import { recipeSchema } from '~/server/schemas/recipeSchema';

const updatedRecipeData = await readValidatedBody(event, recipeSchema);
```

This ensures that the incoming data is always valid and correctly typed before you even attempt to update the database. This is the recommended and standard approach for building type-safe and secure APIs in Nuxt.
