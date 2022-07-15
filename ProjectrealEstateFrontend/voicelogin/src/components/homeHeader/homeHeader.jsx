import React from 'react';
import './homeHeader.scss';
import { NavLink } from 'react-router-dom';

function homeHeader() {
    return (
        <div className="img" style={{backgroundImage:"url(pexels-photo-5695930.jpeg)"}} >
        <div className="overlay_effect">
        <div className="container-fluid">
        
        <div className="header_div">
            <h1 className="header">Welcome Foodies</h1>
            <h1 className="headertxt">Food  Recipe  Application.</h1>
            <p className="headingtxt1">This is an voice command application to get different recipes like  fruits,vegetables,salads,vegan,different couisins,sweets,leverages,cookies. </p>
            <NavLink to='/askrecipes' className="headingtxt2" >Try Recipes</NavLink>
           

        </div>
        </div>
        </div>
        </div>
    )
}

export default homeHeader
