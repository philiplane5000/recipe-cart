# Recipe Cart

A modern web application that simplifies meal planning by allowing users to curate recipes, dynamically generate shopping lists from their weekly meal selections, and more.

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- Package manager (npm)
- MongoDB Atlas account (for data storage)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd recipe-cart

# Install dependencies
npm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Production Build

Build the application for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## 🛠️ Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/) - Vue.js meta-framework with TypeScript
- **UI Library**: [Vuetify](https://vuetifyjs.com/) - Material Design components
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas) - Cloud-native document database
- **Component Architecture**: [Atomic Design Pattern](https://atomicdesign.bradfrost.com/) with TypeScript
- **Language**: TypeScript for type safety and better DX

## ✨ Features

### Core Functionality

- **Recipe Management**: Create, edit, and organize your personal recipe collection
- **Recipe Import**: Import recipes from popular cooking websites with automatic parsing
- **Weekly Meal Planning**: Select recipes for the week using an intuitive calendar interface
- **Smart Shopping Lists**: Automatically generate consolidated grocery lists from selected recipes
- **Ingredient Intelligence**: Smart consolidation of duplicate ingredients (e.g., "2 eggs + 3 eggs = 5 eggs")

### User Experience

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: User-preferred theme support
- **Search & Filter**: Quickly find recipes by ingredients, cuisine, cooking time, or dietary restrictions
- **Recipe Collections**: Organize recipes into custom collections (e.g., "Quick Weeknight", "Sunday Dinners")

## 📚 Documentation

- [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Vuetify Documentation](https://vuetifyjs.com/en/getting-started/installation/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vue 3 + TypeScript Guide](https://vuejs.org/guide/typescript/overview.html)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [Deployment Guide](https://nuxt.com/docs/getting-started/deployment)

---

# 🧪 Component Architecture: Atomic Design Pattern

RecipeCart uses the Atomic Design methodology for organizing and building UI components with TypeScript for enhanced type safety and developer experience. This creates a scalable, maintainable component system optimized for recipe management workflows.

## 🏗️ Directory Structure

```
components/
├── atoms/          # Basic building blocks (buttons, inputs, icons)
├── molecules/      # Simple combinations (search boxes, form fields)
├── organisms/      # Complex components (recipe cards, shopping lists)
└── templates/      # Page-level layouts (dashboard, recipe view)
```

## Recipe-Specific Atomic Components

### ⚛️ Atoms - Recipe Building Blocks

```
atoms/
├── Button.vue              # Action buttons (Save, Add, Delete)
├── Input.vue               # Text inputs for recipe fields
├── Textarea.vue            # Multi-line text for instructions
├── Tag.vue                 # Dietary tags (Vegan, Gluten-Free, etc.)
├── Rating.vue              # Star rating component
├── Timer.vue               # Cooking/prep time display
├── ServingSize.vue         # Portion indicator
├── Difficulty.vue           # Difficulty level indicator
├── Checkbox.vue            # Ingredient checklist items
├── QuantityInput.vue       # Number input with unit selector
├── UnitSelector.vue        # Measurement units dropdown
├── Image.vue               # Recipe photo component
├── Icon.vue                # Food/cooking icons
├── Badge.vue               # Recipe status indicators
└── Loading.vue             # Loading states for recipe operations
```

### 🧬 Molecules - Recipe Combinations

```
molecules/
├── RecipeSearch.vue        # Search input + filters + sorting
├── IngredientInput.vue     # Quantity + Unit + Ingredient name
├── InstructionStep.vue     # Step number + instruction + optional timer
├── RecipeMetadata.vue      # Cook time + servings + difficulty
├── TagSelector.vue         # Multi-select tag component
├── ImageUpload.vue         # Photo upload with preview
├── NutritionFacts.vue      # Nutrition information display
├── RecipeRating.vue        # Stars + review count + user rating
├── ShoppingListItem.vue    # Checkbox + quantity + ingredient + notes
├── MealPlanSlot.vue        # Date + meal type + recipe assignment
├── CollectionCard.vue      # Collection thumbnail + title + count
├── RecipePreview.vue       # Compact recipe overview card
├── IngredientList.vue      # Complete ingredient list with quantities
├── CookingInstructions.vue # Step-by-step cooking guide
└── RecipeActions.vue       # Save, share, edit, delete actions
```

### 🦠 Organisms - Complete Recipe Sections

```
organisms/
├── Header.vue              # Logo + navigation + user menu + search
├── RecipeCard.vue          # Full recipe display with image, metadata, actions
├── RecipeForm.vue          # Complete recipe creation/editing form
├── ShoppingList.vue        # Generated grocery list with categorization
├── MealCalendar.vue        # Weekly meal planning calendar
├── RecipeCollection.vue    # Grid of recipes in a collection
├── SearchResults.vue       # Recipe search results with filters
├── IngredientManager.vue   # Add/edit/remove ingredients interface
├── InstructionEditor.vue   # Step-by-step instruction builder
├── RecipeBrowser.vue       # Browse recipes with infinite scroll
├── WeeklyPlanner.vue       # Meal planning interface with drag-drop
├── GroceryGenerator.vue    # Shopping list generation controls
├── UserDashboard.vue       # User's recipe dashboard overview
├── RecipeDetails.vue       # Full recipe view with all information
├── CollectionManager.vue   # Create and manage recipe collections
└── ImportWizard.vue        # Recipe import from external websites
```

### 📄 Templates - Page Layouts

```
templates/
├── DefaultLayout.vue       # Header + main content + footer
├── RecipeLayout.vue        # Recipe-focused layout with sidebar
├── DashboardLayout.vue     # User dashboard with widgets
├── PlannerLayout.vue       # Meal planning focused layout
├── CollectionLayout.vue    # Recipe collection browsing
├── AuthLayout.vue          # Login/register centered layout
├── ImportLayout.vue        # Recipe import workflow layout
└── MobileLayout.vue        # Mobile-optimized navigation
```

---

## 🗃️ Data Models

### Core Types (TypeScript)

```typescript
// Recipe Management Types
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
```

---

## 🔌 API Routes

### Recipe Management

```
GET    /api/recipes              # Get all user recipes
POST   /api/recipes              # Create new recipe
GET    /api/recipes/:id          # Get specific recipe
PUT    /api/recipes/:id          # Update recipe
DELETE /api/recipes/:id          # Delete recipe
POST   /api/recipes/import       # Import recipe from URL
```

---

## 🎯 Development Roadmap

### Phase 1: MVP (Current)

- [ ] Basic recipe CRUD operations
- [ ] Manual recipe creation and editing
- [ ] Simple meal planning calendar
- [ ] Basic shopping list generation
- [ ] Responsive web interface

### Phase 2: Enhanced Features

- [ ] Recipe import from major cooking websites
- [ ] Advanced search and filtering
- [ ] Recipe collections and tagging
- [ ] Improved shopping list categorization
- [ ] User accounts and authentication

### Phase 3: Smart Features

- [ ] AI-powered recipe recommendations
- [ ] Nutrition analysis and tracking
- [ ] Pantry management integration
- [ ] Social features (sharing, reviews)

### Phase 4: Integrations

- [ ] Grocery delivery service APIs (Instacart, Amazon Fresh)
- [ ] Smart kitchen device integration
- [ ] Voice assistant compatibility
- [ ] Third-party fitness app sync

---

## 🚀 Getting Started for Developers

### Environment Setup

1. **Clone and install dependencies**

   ```bash
   git clone <repo-url>
   cd recipe-cart
   npm install
   ```

2. **Configure environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB Atlas connection string
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

### Key Development Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # ESLint checking
npm run lint:fix     # Auto-fix lint issues

# Testing
# npm run test         # Run test suite
# npm run test:watch   # Watch mode testing
# npm run test:coverage # Coverage report

# Database
# npm run db:seed      # Seed database with sample data
# npm run db:migrate   # Run database migrations
```

---

## 🤝 Contributing

We welcome contributions to RecipeCart! Please follow these guidelines:

1. **Fork the repository** and create a feature branch
2. **Follow atomic design principles** when adding components
3. **Include TypeScript types** for all new interfaces
4. **Write tests** for new functionality
5. **Update documentation** as needed
6. **Submit a pull request** please provide a clear description

### Code Style

- Use TypeScript for all new code
- Follow Vue 3 Composition API patterns
- Implement proper error handling
- Include JSDoc comments for complex functions
- Follow atomic design component organization

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🍳 Happy Cooking!

RecipeCart makes meal planning effortless by bringing together your favorite recipes and streamlining your grocery shopping.
