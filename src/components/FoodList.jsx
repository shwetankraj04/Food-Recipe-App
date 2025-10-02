import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setfoodId }) {
  const foods = foodData || [];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "flex-start",
      }}
    >
      {foods.length > 0 ? (
        foods.map((food) => (
          <FoodItem setfoodId={setfoodId} key={food.idMeal} food={food} />
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px", width: "100%" }}>
          No recipes found.
        </p>
      )}
    </div>
  );
}
