import './App.css';
import { useState,useEffect } from 'react';
import Title from './components/Title';
import Search from './components/Search';
import NavBar from './components/NavBar';
import RecipeForm from './components/RecipeForm';
import RecipeContainer from './containers/RecipeContainer';

function App() {

  const [cakes, setCakes] = useState([])
  const [ingredients,setIngredients] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/cakes")
    .then(response => response.json())
    .then(data => setCakes(data))
  },[])

  useEffect(() => {
    fetch("http://localhost:8080/ingredients")
    .then(response => response.json())
    .then(data => setIngredients(data))
  },[]) //[] mean that we will trigger this on mount and that is it

const addCake = (submittedCake) => {
  fetch("http://localhost:8080/cakes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(submittedCake)
  })
  .then(response => response.json())
  .then(data => setCakes([...cakes,data]))
  // 34 and 35 to add the cake to the page


  // const updatedCakes = [...cakes, submittedCake];
  // setCakes(updatedCakes);
}

  return (
    <>
      <Title />
      <Search />
      <NavBar />
      <RecipeForm handleCakeSubmit={(cake) => addCake(cake)} allIngredients={ingredients} />
      <RecipeContainer cakes={cakes} />
    </>
  );
}

export default App;
