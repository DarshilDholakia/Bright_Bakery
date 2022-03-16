const Recipe = ({cake}) => {



    return (
        <div>
            <h3>{cake.cakeName}</h3>
            <p>Ingredients:</p>
            <ul>
                {cake.ingredients.map((ingredient,index) => {
                    return (
                    <li key={index}>{ingredient.name}</li>
                    )
                })}
            </ul>
            <h6>Rating: {cake.rating}</h6>
        </div>
    );
}

export default Recipe;