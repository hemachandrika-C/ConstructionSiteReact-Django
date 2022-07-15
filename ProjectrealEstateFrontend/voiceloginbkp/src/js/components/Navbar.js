import React ,{Fragment} from 'react'
import { Link } from 'react-router-dom';
import {logout} from '../actions/auth';
import  {connect} from 'react-redux'
import './Navbar.scss'

function Navbar({logout, isAuthenticated}) {
    console.log(isAuthenticated)

  const guestLink = () =>{
      <Fragment>
           
                  

      </Fragment>




  }

  const authLinks = ()=>{
    <li className="nav-item">
    <Link className="nav-link"  onClick={logout}>Logout</Link>
    </li>
      

  }


    return (
        <div className="ss">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <Link class="navbar-brand" to="/">SaiGroups</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/OnGoingProject">OnGoingProject</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/UpComingProject">UpComingProject</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Gallery">Gallery</Link>
      </li>
  </ul>
  <ul class="navbar-nav ml-auto">
  <li class="nav-item active">
             <Link class="nav-link" to="/login">Login</Link>
             </li>
             <li class="nav-item">
             <Link class="nav-link" to="/signup">Signup</Link>
             </li>
    
   
     
  </ul>
   
  </div>
</nav>
            
        </div>
    )
}

const mapStateToProps = state =>({
    isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps,{logout})(Navbar)
