import React from 'react'
import "./imagesMenuItem.scss"

function ImagesMenu({img}) {
    console.log(img)
    return (
        <div>
                 
            <img src={img}  className="upimg"/>          
           
            
        </div>
    )
}

export default ImagesMenu
