import React from 'react'
import './MenuItemComponent.scss'
import ImagesMenu from '../ImagesMenuUpcom/ImagesMenu'

function MenuItemCompoent({title,price,location,description,floorplans,features,projectimage,videoUrl}) {
    console.log(features)
    console.log(projectimage)
       return (
        <div className="col-lg-6">
            <div className="divs_header">
                <h1>{title}</h1>
                <video width="450" height="240" controls>
                    <source src={videoUrl}>

                    </source>
                </video>
                <p>price:{price}</p> 
                <p>location:{location}</p>
                <p>description:{description}</p>
                <p>features:{features.map(el=><ul><li>{el}</li></ul>)}</p>
                <p className="imagesflex">Images:{projectimage.map(el=><ImagesMenu img={el}/>)}</p>
                
                

            </div>

            
        </div>
    )
}

export default MenuItemCompoent
