
import React from 'react';
import RecipeComponent from '../recipeComponent/recipeComponent';

function hititems({ itemshits,activeArticles}) {
    console.log( itemshits)
    console.log(activeArticles)
    return (
         
        <div className="container elements">
           
          
          {(itemshits === undefined )?" ":(itemshits.map((el,i)=><RecipeComponent recipe= {el.recipe} i={i} activeArt={activeArticles} />)) }
           
           
            
        </div>
       
    )
}

export default hititems
