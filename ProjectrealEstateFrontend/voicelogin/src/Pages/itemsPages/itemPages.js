import React from 'react';
import './itemPages.css';
import HitItems from './hitComponent/hititems';


function itemPages({setArticles:{count,hits,q},activeArticle}) {    
    return (
        <>

        <div className="section">
          <div className="container">
            <div className="section_Heading">
            <h1 className="section_header"> {q} Recipes </h1>
            <div class="row">
                <div class="col-lg-12">               
                   <div class="ourservicearrow">
                    <div class="arrow">
                    <i class="fa fa-glass fa-glass-items1"></i>
                    </div>   
                    </div>             
                   
                   
                </div>
            </div>
            </div>  
            <HitItems itemshits={hits}  activeArticles={activeArticle}/>

        </div>
        </div>


        </>
      
    )
}

export default itemPages
