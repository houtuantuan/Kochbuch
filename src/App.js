
import { createClient } from "contentful";
import { useEffect, useState } from "react";
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
  

const {fields}=recipes;
//const anleitung= recipes.fields.anleitung;
//console.log(typeof recipes.fields);
console.log(typeof Object.values(recipes));




  return (
    <div className="App">
      <h1>CONTENTFUL TEST</h1>
      {recipes.map((recipe) => (
        <div>
          <p>{recipe.fields.rezeptName}</p>

          <img src={recipe.fields.rezeptBilder.fields.file.url} />
          <p>
            
          </p>




        </div>
      ))}
    </div>
  );
}

export default App;
