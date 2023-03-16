
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


  const client = createClient({
    space: "g7wwoqw7k7vb",
    accessToken: "6vacSQq_qoG6HEtSss7ZTCoHm74Sr8yTUUEbOK6PXDY",
  });

  const getData = async () => {
    const entryItems = await client.getEntries();
    setRecipes(entryItems.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <Navibar />
        <Routes>
          <Route path="/Kochbuch" element={<Main recipes={recipes} />}/>
          <Route key={create_UUID()} path="/Kochbuch/:index" element={<Recipe recipes={recipes}/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </Container>
    </>

  );
}

export default App;
