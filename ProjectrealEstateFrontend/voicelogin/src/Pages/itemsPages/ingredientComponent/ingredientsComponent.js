import React from 'react'

function ingredientComponent({ ingredients}) {
    console.log(ingredients)
    return (
        <div>
            {ingredients.map(el=><h1>{el}</h1>)}
            
        </div>
    )
}

export default ingredientComponent
