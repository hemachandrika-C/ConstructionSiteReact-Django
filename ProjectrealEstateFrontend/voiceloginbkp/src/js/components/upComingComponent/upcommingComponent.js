import React, { Component } from 'react'
import './upCommingComponent.scss'
import UpcomingProjectData from '../../dataapi/upcomingProject' 
import MenuItemupcoming from './MenuitemComponent/MenuItemCompoent'

class upCommingComponent extends Component {

 constructor(props) {
     super(props)
 
     this.state = {
          val:UpcomingProjectData
     }
 }


    render() {
        console.log(this.state.val)
        return (
            <div className="upCominProject">
                <div className="title">
                    <h1>UpcomingProject</h1>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {this.state.val.map((el,i)=><MenuItemupcoming key={el.id} {...el} />)}
                        

                    </div>

                </div>
                
            </div>
        )
    }
}

export default upCommingComponent
