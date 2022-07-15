import React,{ useEffect} from 'react'
import Navbar from '../components/Navbar';
import {connect} from 'react-redux';
import { checkAuthenicated , load_user } from '../../actions/auth'

function Layout(props) {
  
    useEffect(()=>{
        props.checkAuthenicated();
        props.load_user();

    },[]);




    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default connect(null,{ checkAuthenicated ,load_user })(Layout)
