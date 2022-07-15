import React from 'react'
import './ourworksdef.scss'
import { Link } from 'react-router-dom';
function ourworksdef() {
    return (
        <div className="ourwork">
            <div className="layer1">
                <div className="container margi_s">
                    <div className="row">
                        <div className="col-lg-6 s">
                                      <img src="https://drive.google.com/uc?id=1ClFwdPHGTOO9j2T5g2nWARYU9EQrzRyH" className="img-fluid img2"/>
                                      <img src="https://m.recipes.timesofindia.com/img/81616123/Master.jpg" className="img-fluid img1" />
                 
                        </div>
                        <div className="col-lg-6">
                        <div class="divsec2">
					    <h2>WE Offer Different Kinds of Recipes World<br/>
						WIDE<span> RANGE OF </span> Yummy <br/>and Nutrients way.</h2>
					    <Link to="/askrecipe" class="joii">Join now</Link>
				     	</div>

                        </div>

                    </div>

                </div>
            


            </div>
            
        </div>
    )
}

export default ourworksdef
