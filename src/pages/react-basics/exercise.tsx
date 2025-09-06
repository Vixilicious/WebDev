
import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import CodeBlock from '@/components/CodeBlock';
import ExerciseBlock from '@/components/ExerciseBlock';

const ReactExercise = () => {
  return (
    <ContentLayout
      title="React Basics Final Exercise"
      section="React Basics"
      currentStep={6}
      totalSteps={6}
      prevLink="/react-basics/components"
      nextLink="/react-intermediate"
    >
      <div>
        <h2>Building a Complete React Application</h2>
        <p>
          In this final exercise, we'll bring together everything you've learned about React basics to build a practical application - a Recipe Finder. This project will help you practice:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-6">
          <li>Creating and organizing components</li>
          <li>Using props to pass data between components</li>
          <li>Managing state with useState hook</li>
          <li>Handling user input and events</li>
          <li>Rendering lists with keys</li>
          <li>Implementing conditional rendering</li>
          <li>Applying CSS for styling</li>
        </ul>

        <h2>Project Overview: Recipe Finder</h2>
        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-4">Features of the Recipe Finder</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Functionality:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Search for recipes by ingredients</li>
                <li>Display recipe cards with images</li>
                <li>Filter recipes by category</li>
                <li>View recipe details</li>
                <li>Save favorite recipes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Components Structure:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>App (main component)</li>
                <li>Header (with search functionality)</li>
                <li>RecipeList (container for recipe cards)</li>
                <li>RecipeCard (individual recipe display)</li>
                <li>RecipeDetail (expanded view of a recipe)</li>
                <li>CategoryFilter (filter buttons)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Step 1: Project Structure Setup</h2>
        <p>
          First, let's create a new React application and organize our project structure:
        </p>

        <CodeBlock language="bash">
{`npx create-react-app recipe-finder
cd recipe-finder
mkdir -p src/components src/data src/styles
touch src/components/Header.js src/components/RecipeList.js src/components/RecipeCard.js
touch src/components/RecipeDetail.js src/components/CategoryFilter.js
touch src/styles/App.css src/styles/Header.css src/styles/RecipeList.css
touch src/styles/RecipeCard.css src/styles/RecipeDetail.css src/styles/CategoryFilter.css
touch src/data/recipes.js`}
        </CodeBlock>

        <h2>Step 2: Creating the Recipe Data</h2>
        <p>
          For this exercise, we'll use a static dataset of recipes. Create a file <code>src/data/recipes.js</code> with the following content:
        </p>

        <CodeBlock language="javascript">
{`const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Black Pepper"],
    instructions: "1. Cook pasta until al dente. 2. Fry pancetta. 3. Mix eggs and cheese. 4. Combine all ingredients and toss.",
    prepTime: 10,
    cookTime: 15,
    category: "Italian",
    difficulty: "Intermediate"
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    ingredients: ["Chicken", "Yogurt", "Tomato Sauce", "Onions", "Spices"],
    instructions: "1. Marinate chicken in yogurt and spices. 2. Grill until cooked. 3. Prepare sauce. 4. Combine chicken and sauce.",
    prepTime: 30,
    cookTime: 20,
    category: "Indian",
    difficulty: "Intermediate"
  },
  {
    id: 3,
    title: "Classic Cheeseburger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1698&q=80",
    ingredients: ["Ground Beef", "Burger Buns", "Cheese", "Lettuce", "Tomato", "Onion"],
    instructions: "1. Form beef patties. 2. Grill until desired doneness. 3. Top with cheese. 4. Assemble burger with toppings.",
    prepTime: 15,
    cookTime: 10,
    category: "American",
    difficulty: "Easy"
  },
  {
    id: 4,
    title: "Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Snow Peas", "Soy Sauce", "Ginger"],
    instructions: "1. Prepare vegetables. 2. Heat wok with oil. 3. Stir fry vegetables. 4. Add sauce and seasonings.",
    prepTime: 20,
    cookTime: 10,
    category: "Asian",
    difficulty: "Easy"
  },
  {
    id: 5,
    title: "Chocolate Chip Cookies",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    ingredients: ["Flour", "Butter", "Sugar", "Brown Sugar", "Eggs", "Chocolate Chips"],
    instructions: "1. Cream butter and sugars. 2. Add eggs. 3. Mix in dry ingredients. 4. Fold in chocolate chips. 5. Bake at 350°F.",
    prepTime: 15,
    cookTime: 10,
    category: "Dessert",
    difficulty: "Easy"
  },
  {
    id: 6,
    title: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    ingredients: ["Ground Beef", "Taco Shells", "Lettuce", "Tomato", "Cheese", "Taco Seasoning"],
    instructions: "1. Brown beef. 2. Add taco seasoning. 3. Warm taco shells. 4. Assemble tacos with toppings.",
    prepTime: 10,
    cookTime: 15,
    category: "Mexican",
    difficulty: "Easy"
  },
  {
    id: 7,
    title: "Caesar Salad",
    image: "https://plus.unsplash.com/premium_photo-1661435876831-bba5738c93a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing", "Chicken Breast"],
    instructions: "1. Grill chicken and slice. 2. Toss lettuce with dressing. 3. Add croutons and Parmesan. 4. Top with chicken.",
    prepTime: 20,
    cookTime: 10,
    category: "Salad",
    difficulty: "Easy"
  },
  {
    id: 8,
    title: "Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    ingredients: ["Arborio Rice", "Mushrooms", "Onion", "White Wine", "Vegetable Stock", "Parmesan"],
    instructions: "1. Sauté mushrooms and onions. 2. Add rice and wine. 3. Gradually add stock. 4. Stir until creamy. 5. Finish with Parmesan.",
    prepTime: 10,
    cookTime: 30,
    category: "Italian",
    difficulty: "Intermediate"
  }
];

export default recipes;`}
        </CodeBlock>

        <h2>Step 3: Creating Individual Components</h2>
        <p>
          Now, let's implement each component one by one:
        </p>

        <h3>1. Header Component</h3>
        <CodeBlock language="jsx">
{`// src/components/Header.js
import React, { useState } from 'react';
import '../styles/Header.css';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="app-title">Recipe Finder</h1>
        <p className="app-subtitle">Find delicious recipes for any ingredients you have</p>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search recipes by ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;`}
        </CodeBlock>

        <h3>2. CategoryFilter Component</h3>
        <CodeBlock language="jsx">
{`// src/components/CategoryFilter.js
import React from 'react';
import '../styles/CategoryFilter.css';

function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      <h2>Filter by Category</h2>
      <div className="category-buttons">
        <button
          className={\`category-button \${activeCategory === 'All' ? 'active' : ''}\`}
          onClick={() => onCategoryChange('All')}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={\`category-button \${activeCategory === category ? 'active' : ''}\`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;`}
        </CodeBlock>

        <h3>3. RecipeCard Component</h3>
        <CodeBlock language="jsx">
{`// src/components/RecipeCard.js
import React from 'react';
import '../styles/RecipeCard.css';

function RecipeCard({ recipe, onViewDetails, isFavorite, onToggleFavorite }) {
  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        <span className="recipe-category">{recipe.category}</span>
        <button 
          className={\`favorite-button \${isFavorite ? 'favorited' : ''}\`}
          onClick={() => onToggleFavorite(recipe.id)}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.title}</h3>
        <div className="recipe-meta">
          <span className="prep-time">Prep: {recipe.prepTime} min</span>
          <span className="cook-time">Cook: {recipe.cookTime} min</span>
          <span className="difficulty">{recipe.difficulty}</span>
        </div>
        <p className="recipe-ingredients">
          <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
        </p>
        <button 
          className="view-details-button"
          onClick={() => onViewDetails(recipe)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;`}
        </CodeBlock>

        <h3>4. RecipeList Component</h3>
        <CodeBlock language="jsx">
{`// src/components/RecipeList.js
import React from 'react';
import RecipeCard from './RecipeCard';
import '../styles/RecipeList.css';

function RecipeList({ recipes, onViewDetails, favorites, onToggleFavorite }) {
  if (recipes.length === 0) {
    return (
      <div className="recipe-list empty">
        <p className="no-recipes">No recipes found. Try a different search term or category.</p>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onViewDetails={onViewDetails}
          isFavorite={favorites.includes(recipe.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default RecipeList;`}
        </CodeBlock>

        <h3>5. RecipeDetail Component</h3>
        <CodeBlock language="jsx">
{`// src/components/RecipeDetail.js
import React from 'react';
import '../styles/RecipeDetail.css';

function RecipeDetail({ recipe, onClose, isFavorite, onToggleFavorite }) {
  if (!recipe) return null;

  return (
    <div className="recipe-detail-overlay">
      <div className="recipe-detail">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="recipe-detail-header">
          <h2 className="detail-title">{recipe.title}</h2>
          <button 
            className={\`favorite-button \${isFavorite ? 'favorited' : ''}\`}
            onClick={() => onToggleFavorite(recipe.id)}
          >
            {isFavorite ? '★ Favorited' : '☆ Add to Favorites'}
          </button>
        </div>
        <div className="recipe-detail-content">
          <img src={recipe.image} alt={recipe.title} className="detail-image" />
          <div className="detail-info">
            <p className="detail-category">Category: {recipe.category}</p>
            <div className="detail-times">
              <span>Preparation: {recipe.prepTime} min</span>
              <span>Cooking: {recipe.cookTime} min</span>
              <span>Difficulty: {recipe.difficulty}</span>
            </div>
            <div className="detail-ingredients">
              <h3>Ingredients:</h3>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="detail-instructions">
              <h3>Instructions:</h3>
              <ol>
                {recipe.instructions.split(/\\d+\\.\\s/).filter(step => step.trim() !== '').map((step, index) => (
                  <li key={index}>{step.trim()}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;`}
        </CodeBlock>

        <h2>Step 4: Styling the Components</h2>
        <p>
          Let's add CSS files to style each of our components:
        </p>

        <h3>1. App.css</h3>
        <CodeBlock language="css">
{`/* src/styles/App.css */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f7fa;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.main {
  flex: 1;
}

.app-footer {
  margin-top: 40px;
  padding: 20px;
  text-align: center;
  background-color: #333;
  color: white;
}`}
        </CodeBlock>

        <h3>2. Header.css</h3>
        <CodeBlock language="css">
{`/* src/styles/Header.css */
.header {
  background-color: #2c3e50;
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

.app-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.app-subtitle {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #ecf0f1;
}

.search-form {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  flex: 1;
  padding: 12px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px 0 0 4px;
}

.search-button {
  padding: 12px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #c0392b;
}`}
        </CodeBlock>

        <h3>3. CategoryFilter.css</h3>
        <CodeBlock language="css">
{`/* src/styles/CategoryFilter.css */
.category-filter {
  margin: 30px 0;
}

.category-filter h2 {
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-button {
  padding: 8px 16px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.category-button:hover {
  background-color: #e9ecef;
}

.category-button.active {
  background-color: #2c3e50;
  color: white;
  border-color: #2c3e50;
}`}
        </CodeBlock>

        <h3>4. RecipeCard.css</h3>
        <CodeBlock language="css">
{`/* src/styles/RecipeCard.css */
.recipe-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.recipe-image-container {
  position: relative;
  height: 200px;
}

.recipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recipe-category {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(44, 62, 80, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
}

.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #ccc;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, color 0.2s;
}

.favorite-button.favorited {
  color: #f39c12;
}

.favorite-button:hover {
  transform: scale(1.1);
}

.recipe-info {
  padding: 15px;
}

.recipe-title {
  font-size: 18px;
  margin-bottom: 8px;
}

.recipe-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #666;
}

.recipe-ingredients {
  font-size: 14px;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.view-details-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  width: 100%;
}

.view-details-button:hover {
  background-color: #2980b9;
}`}
        </CodeBlock>

        <h3>5. RecipeList.css</h3>
        <CodeBlock language="css">
{`/* src/styles/RecipeList.css */
.recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.recipe-list.empty {
  display: block;
  text-align: center;
  padding: 40px 0;
}

.no-recipes {
  font-size: 18px;
  color: #666;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}`}
        </CodeBlock>

        <h3>6. RecipeDetail.css</h3>
        <CodeBlock language="css">
{`/* src/styles/RecipeDetail.css */
.recipe-detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 20px;
}

.recipe-detail {
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out forwards;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 28px;
  color: #666;
  cursor: pointer;
  z-index: 10;
}

.recipe-detail-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-title {
  font-size: 24px;
  margin: 0;
  padding-right: 30px;
}

.recipe-detail-header .favorite-button {
  position: static;
  width: auto;
  height: auto;
  padding: 8px 16px;
  border-radius: 20px;
  box-shadow: none;
  font-size: 14px;
}

.recipe-detail-header .favorite-button.favorited {
  background-color: #f39c12;
  color: white;
}

.recipe-detail-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

@media (min-width: 768px) {
  .recipe-detail-content {
    flex-direction: row;
    gap: 20px;
  }
}

.detail-image {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .detail-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
}

.detail-info {
  flex: 1;
}

.detail-category {
  display: inline-block;
  background-color: #f8f9fa;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  margin-bottom: 15px;
}

.detail-times {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  font-size: 14px;
}

.detail-ingredients {
  margin-bottom: 20px;
}

.detail-ingredients h3,
.detail-instructions h3 {
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
}

.detail-ingredients ul {
  list-style-type: disc;
  padding-left: 20px;
}

.detail-instructions ol {
  list-style-type: decimal;
  padding-left: 20px;
}

.detail-ingredients li,
.detail-instructions li {
  margin-bottom: 5px;
  line-height: 1.5;
}`}
        </CodeBlock>

        <h2>Step 5: Implementing the App Component</h2>
        <p>
          Finally, let's create the main App component that brings everything together:
        </p>

        <CodeBlock language="jsx">
{`// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import recipesData from './data/recipes';
import './styles/App.css';

function App() {
  // State variables
  const [recipes, setRecipes] = useState(recipesData);
  const [displayedRecipes, setDisplayedRecipes] = useState(recipesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Get unique categories for the filter
  const uniqueCategories = [...new Set(recipes.map(recipe => recipe.category))];

  // Filter recipes when search term or category changes
  useEffect(() => {
    let filtered = [...recipes];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(recipe => 
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        ) || 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(recipe => recipe.category === activeCategory);
    }
    
    setDisplayedRecipes(filtered);
  }, [searchTerm, activeCategory, recipes]);

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
    setActiveCategory('All');
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Handle view recipe details
  const handleViewDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Handle close recipe details
  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };

  // Toggle favorite status
  const handleToggleFavorite = (recipeId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(recipeId)) {
        return prevFavorites.filter(id => id !== recipeId);
      } else {
        return [...prevFavorites, recipeId];
      }
    });
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <main className="main">
        <div className="container">
          <CategoryFilter 
            categories={uniqueCategories} 
            activeCategory={activeCategory} 
            onCategoryChange={handleCategoryChange} 
          />
          <RecipeList 
            recipes={displayedRecipes} 
            onViewDetails={handleViewDetails}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>
      </main>
      {selectedRecipe && (
        <RecipeDetail 
          recipe={selectedRecipe} 
          onClose={handleCloseDetails}
          isFavorite={favorites.includes(selectedRecipe.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Recipe Finder App | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;`}
        </CodeBlock>

        <h2>Step 6: Update index.js</h2>
        <p>
          Make sure your <code>index.js</code> file correctly imports and renders the App component:
        </p>

        <CodeBlock language="jsx">
{`// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}
        </CodeBlock>

        <h2>Step 7: Running the Application</h2>
        <p>
          Now that all files are created, you can run your application with:
        </p>

        <CodeBlock language="bash">
          npm start
        </CodeBlock>

        <p className="mt-4">
          Your Recipe Finder application should now be running on <code>http://localhost:3000</code>. Test all the features to make sure everything works correctly.
        </p>

        <div className="bg-orange/20 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold mb-2">What We've Learned</h3>
          <p>
            In this exercise, we've put together all the React basics concepts:
          </p>
          <ul className="list-disc ml-6 space-y-1 mt-4">
            <li>Creating functional components</li>
            <li>Using props to pass data between components</li>
            <li>Managing state with the useState hook</li>
            <li>Using useEffect for side effects and filtering data</li>
            <li>Handling user events (clicks, form submissions, etc.)</li>
            <li>Conditional rendering (e.g., recipe details modal)</li>
            <li>Rendering lists with unique keys</li>
            <li>Organizing component styles with CSS</li>
            <li>Creating a responsive design that works on different screen sizes</li>
          </ul>
        </div>

        <ExerciseBlock title="Challenge: Enhance the Recipe Finder App">
          <p>
            To further practice your React skills, try implementing these enhancements to the Recipe Finder application:
          </p>
          
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <strong>Local Storage:</strong> Use localStorage to persist favorites between page refreshes.
            </li>
            <li>
              <strong>Favorites Filter:</strong> Add a button to filter and show only favorite recipes.
            </li>
            <li>
              <strong>Sort Functionality:</strong> Add options to sort recipes by prep time, cook time, or alphabetically.
            </li>
            <li>
              <strong>Recipe Form:</strong> Create a form to add new recipes to the collection.
            </li>
            <li>
              <strong>Responsive Improvements:</strong> Enhance the responsive design for better mobile experience.
            </li>
          </ol>
          
          <p className="font-medium mt-4">
            These enhancements will give you more practice with React state management, effects, forms, and lifecycle management.
          </p>
        </ExerciseBlock>

        <div className="bg-pink/20 p-6 rounded-lg my-6">
          <h3 className="text-xl font-semibold mb-2">Congratulations!</h3>
          <p className="mb-4">
            You've completed the React Basics section! You've learned how to create components, work with props and state, render lists, handle user input, and style your React applications. In the next section, React Intermediate, we'll cover more advanced topics including React Hooks in depth, context API, routing, forms, and connecting to external APIs.
          </p>
          <div className="flex justify-center">
            <a href="/react-intermediate" className="btn-primary inline-flex items-center gap-2">
              Continue to React Intermediate
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default ReactExercise;
