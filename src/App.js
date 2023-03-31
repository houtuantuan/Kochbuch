
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import "./styles.css";
import Main from "./components/Main";
import Recipe from "./components/Recipe"
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Navibar from "./components/Navibar";
import { Container } from "react-bootstrap";
import axios from "axios";




function App() {

  const [recipes, setRecipes] = useState(null);

  const fetchData = async () => {
    try {
      const getMemes = await fetch('http://localhost:8000/home');
      if (!getMemes) throw new Error(`Request failes with a status of ${getMemes.status}`);
      const parseData = await getMemes.json();
      setRecipes(parseData);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])




  return (
    <>
      <Container>
        <h1>Hello from the Cookbook</h1>
        {/* <Navibar /> */}
        {/* <Routes>
          <Route path="/" element={<Main recipes={recipes} />}/>
          <Route key={1} path="/:index" element={<Recipe recipes={recipes}/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes> */}
        {/* <Footer/> */}
      </Container>
    </>

  );
}

export default App;
