
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Main from "./components/Main";
import Recipe from "./components/Recipe"


function App() {
  const [recipes, setRecipes] = useState([]);

  const client = createClient({
    space: "g7wwoqw7k7vb",
    accessToken: "6vacSQq_qoG6HEtSss7ZTCoHm74Sr8yTUUEbOK6PXDY",
  });

  const getData = async () => {
    const entryItems = await client.getEntries();
    // console.log(1111)
    // console.log("ENTRIES: ", entryItems.items);
    setRecipes(entryItems.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main recipes={recipes} />}/>
      <Route key="aaa" path="/:index" element={<Recipe recipes={recipes}/>}/>
    </Routes>

  );
}

export default App;
