import React from 'react'
import './OnGoingComponent.scss'

function OnGoingComponent({title,price,location,projectimage,videoUrl,description,features,floorplans}) {
    console.log(title)
    console.log(videoUrl)
    return (
        <div class="card" style={{width: "18rem;"}}>
        <img class="card-img-top" src={projectimage} alt="Card image cap" />
        <div class="card-body">
         <h5 class="card-title">{title.toUpperCase()}</h5>
          <p class="card-text">{description}</p>
          <video className="videoCont" controls>
                    <source src={videoUrl}>

                    </source>
         </video>
          
          <a href="#" class="btn btn-primary">Contact</a>
        </div>
      </div>
    )
}

export default OnGoingComponent
