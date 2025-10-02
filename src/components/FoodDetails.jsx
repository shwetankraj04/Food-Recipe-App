import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import Item from "./Item";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState(null);
  const [isLoading, setLoading] = useState(true); // setter is setLoading

  useEffect(() => {
    async function fetchFood() {
      try {
        let url;
        if (foodId) {
          // Fetch by ID
          url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
        } else {
          // Fetch a random meal if no ID is provided
          url = `https://www.themealdb.com/api/json/v1/1/random.php`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setFood(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error("Error fetching meal:", error);
        setFood(null);
      } finally {
        setLoading(false); // Correct setter name
      }
    }

    fetchFood();
  }, [foodId]);

  if (isLoading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (!food) return <p style={{ textAlign: "center" }}>No recipe found.</p>;

  // Extract ingredients and measures dynamically
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = food[`strIngredient${i}`];
    const measure = food[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className={styles.recipeCard}>
      <h1 className={styles.recipeName}>{food.strMeal}</h1>
      <img
        className={styles.recipeImage}
        src={food.strMealThumb}
        alt={food.strMeal}
      />

      <div className={styles.recipeDetails}>
        <span>
          <strong>Category: {food.strCategory}</strong>
        </span>
        <span>
          <strong>Cuisine: {food.strArea}</strong>
        </span>
      </div>

      <h2>Ingredients</h2>
      <div>
        {ingredients.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>

      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {food.strInstructions
            .split("\r\n")
            .filter((step) => step.trim() !== "")
            .map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
        </ol>
      </div>

      {food.strYoutube && (
        <p>
          <a
            href={food.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.recipeLink}
          >
            Watch Video
          </a>
        </p>
      )}
    </div>
  );
}
