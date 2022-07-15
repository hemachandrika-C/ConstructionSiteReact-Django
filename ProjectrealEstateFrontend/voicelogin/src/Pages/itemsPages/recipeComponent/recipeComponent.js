import React , { useState, useEffect, createRef } from 'react';
import './recipe.css';
import classnames from 'classnames';

function RecipeComponent({recipe:{calories,image,label,url,ingredientLines,totalNutrients},i,activeArt}) {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

 
  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if (i === activeArt && elRefs[activeArt]) {
      scrollToRef(elRefs[activeArt]);
    }
  }, [i, activeArt, elRefs]);

    return (
        <>      
        	<div class="container">
              {/*  <div className="borders_el"> */}
                 <div ref={elRefs[i]} className={classnames("borders_el",activeArt === i ?"borders_el_rl":null)}>
                    <div class="content-top">
					<div class="content-top-grid">
                        <div class="row">
						<div class="col-md-6 content-top-bottom ">
                             <h3 className="Label_text">{label}</h3>
							<p> <h5 className="ingredients_txt">Ingredients</h5>            
                             {ingredientLines.map(el=><ul><li>{el}</li></ul>)}</p>
						</div>
						<div class="col-md-6">
                        <img src={image} alt="RecipeImage" className="img-fluid  recipeimage"/>
                        <p className="openArticlep">Open Article To view Recipe</p>						       
						</div>
						
					</div>
                    </div>
					</div>
				</div>
			</div>
      
        </>
    )
}

export default RecipeComponent
