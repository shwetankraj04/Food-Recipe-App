import { useEffect, useState } from "react";
import styles from "./search.module.css";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    async function fetchFood() {
      try {
        // TheMealDB search by name
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await response.json();
        // data.meals may be null if no results, fallback to empty array
        setFoodData(data.meals || []);
      } catch (error) {
        console.error("Error fetching meals:", error);
        setFoodData([]);
      }
    }

    // Only fetch if query is not empty
    if (query.trim() !== "") {
      fetchFood();
    }
  }, [query, setFoodData]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for a recipe..."
      />
    </div>
  );
}
