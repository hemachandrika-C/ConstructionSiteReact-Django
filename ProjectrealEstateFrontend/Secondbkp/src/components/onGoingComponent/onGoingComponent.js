import React, { Component } from 'react'
import './onGoingComponent.scss'
import OnGoingComp from '../../dataapi/ongoingProject'
import OnGoingMenuItem from '../../components/onGoingComponentMenuItem/onGoingComponent'

class onGoingComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:OnGoingComp
             
        }
    }
    

    render() {
        console.log(this.state.data)
        return (
            <div className="onGoingComponent">
                
                <div className="title">
                   <h1>OnGoing Project</h1>
                    </div>
                    <img src="https://drive.google.com/uc?id=1ljZDwTQ75rWqkkDccT-IiMPQfJRFFBsX" />
                    <div className="sub_title">
                      <h2>Latest Projects</h2>

                    </div>
                  
                  
                {this.state.data.map((el,i)=><OnGoingMenuItem key={i} {...el}/>)}

                
            </div>
        )
    }
}

export default onGoingComponent
