import {useState} from 'react';

const RecipeForm = ({handleCakeSubmit,allIngredients}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [rating, setRating] = useState("");

    const handleCakeNameChange = (event) => {
        setCakeName(event.target.value);
    }

    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    //in 1st conditional, !ingredients was coming back as not true since "" (which is what was set as the initial state on line 6) is a 
    //falsy value therefore this if statement was being entered at all thus the cake was not being submitted
    const handleFormSubmit = (event) => {
        event.preventDefault(); //to stop the page refreshing
        if (!cakeName || !rating) {
            return;
        }
        
        //the cake that we want to add has 3 properties (name, ingred, rating) 
        //and we want to add this new cake object to our state
        handleCakeSubmit({
            cakeName: cakeName,
            ingredients: [],
            rating: rating
        })

        //reseting the fields to empty after clicking the Post button
        setCakeName("");
        // setIngredients("");
        setRating("");

    }

    const ingredientFields = allIngredients.map((ingredient,index) => {
        return(
            <div key={index}>
                <label htmlFor={ingredient.name}>{ingredient.name}</label>
                <input type="checkbox" id={ingredient.name} name={ingredient.name} value={ingredient}></input>
            </div>
        )
    })

    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="fname">Cake name:</label>
                <input 
                    type="text" 
                    id="cakename" 
                    name="cakename"
                    value={cakeName}
                    onChange={handleCakeNameChange} />

                {/* <label htmlFor="ingredients">Ingredients:</label>
                <input 
                    type="text" 
                    id="ingredients" 
                    name="ingredients" 
                    value={ingredients}
                    onChange={handleIngredientsChange}/> */}

                    {ingredientFields}

                <label htmlFor="rating">Rating:</label>
                <input 
                    type="text" 
                    id="rating" 
                    name="rating" 
                    value={rating}
                    onChange={handleRatingChange}/>

                <input type="submit" value="Post" />
            </form>
        </>
    )
}   

export default RecipeForm;