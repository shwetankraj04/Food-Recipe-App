import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]); // list of recipes
  const [foodId, setfoodId] = useState(null); // selected recipe ID

  return (
    <>
      <Nav />

      {/* Search component will fetch meals from TheMealDB */}
      <Search foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          {/* List of recipes */}
          <FoodList setfoodId={setfoodId} foodData={foodData} />
        </InnerContainer>

        <InnerContainer>
          {/* Show selected recipe details, or random if foodId is null */}
          {foodId ? (
            <FoodDetails foodId={foodId} />
          ) : (
            <FoodDetails /> // will fetch a random recipe
          )}
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
