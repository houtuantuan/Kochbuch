
import { createClient } from "contentful";
import { useEffect, useState } from "react";

import {Route,Routes} from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([]);

  const client = createClient({
    space: "g7wwoqw7k7vb",
    accessToken: "6vacSQq_qoG6HEtSss7ZTCoHm74Sr8yTUUEbOK6PXDY",
  });

  const getData = async () => {
    const entryItems = await client.getEntries();

    console.log("ENTRIES: ", entryItems.items);
    setRecipes(entryItems.items);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="App">
      <h1>CONTENTFUL TEST</h1>

      {recipes.map((recipe, index) => (
        <div key={index}>
          <p>{recipe.fields.rezeptName}</p>
          <img src={recipe.fields.rezeptBilder.fields.file.url} />
          <ul>
            {recipe.fields.anleitung.map((e)=>(<p>{e}</p>))}
          </ul>

        </div>
      ))}
    </div>
  );
}

export default App;
