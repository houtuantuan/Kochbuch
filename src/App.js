
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import "./styles.css";
import Main from "./components/Main";
import Recipe from "./components/Recipe"
import Footer from "./components/Footer";
import {Routes , Route} from "react-router-dom";
import Error from "./components/Error";
import Navibar from "./components/Navibar";



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


  //   const posts = items.map(post => ({
  //     url: `/blog/${post.fields.slug}/`,
  //     // remove markdown syntax for better search results
  //     content: removeMd(post.fields.body),
  //     title: post.fields.title,
  //     // make entry id to objectID
  //     objectID: post.sys.id
  //   }));
  // } catch(err) {
  //   console.error(err);
  // }



    setRecipes(entryItems.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>

      <Navibar />
      <Routes>
        <Route path="/" element={<Main recipes={recipes} />}/>
        <Route key={create_UUID()} path="/:index" element={<Recipe recipes={recipes}/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
