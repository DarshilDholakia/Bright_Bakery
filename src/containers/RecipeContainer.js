import {useState} from 'react';
import Recipe from '../components/Recipe';

const RecipeContainer = ({cakes}) => {

    const cakeList = cakes.map((cake, index) => {
        return (
            <Recipe cake={cake}
                    key={index} />
        )
    })
           

    return(
        <>
            {cakeList}
        </>
    )

}

export default RecipeContainer;