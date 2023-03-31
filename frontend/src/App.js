
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import "./styles.css";
import Main from "./components/Main";
import Recipe from "./components/Recipe"
import Footer from "./components/Footer";
import {Routes , Route} from "react-router-dom";
import Error from "./components/Error";
import Navibar from "./components/Navibar";
import { Container } from "react-bootstrap";



function App() {
  const [recipes, setRecipes] = useState([]);



  function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

  // const client = createClient({
  //   space: process.env.REACT_APP_CONTENTFUL_SPACE,
  //   accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  // });

  // const getData = async () => {
  //   const entryItems = await client.getEntries();
  //   setRecipes(entryItems.items);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  

  useEffect(() => {
    fetch("http://localhost:4000/Kochbuch")
      .then((res) => res.json())
      .then((data) => setRecipes(data.message));

  }, []);

  return (
    <>
      <Container>
        {/* <Navibar />
        <Routes>
          <Route path="/Kochbuch" element={<Main recipes={recipes} />}/>
          <Route key={create_UUID()} path="/Kochbuch/:index" element={<Recipe recipes={recipes}/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes> */}
        <p>111111111{recipes}</p>
        {/* <Footer/> */}
      </Container>
    </>

  );
}

export default App;
