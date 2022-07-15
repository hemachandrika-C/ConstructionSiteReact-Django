import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

const Activate = ({ verify,match}) => {
 
   const [verified,setVerified]=useState(false)

    const verify_account = e => {
      const uid = match.params.uid;
      const token = match.params.token;


        verify(uid, token);
        setVerified(true)
    };
    

    if(verified){
        return <Redirect to="/" />
    }
   
    
    return (
        <div className='container mt-5'>
            <h1>verify your account</h1>
            <button onClick={verify_account}>verify</button>
          
        </div>
    );
};


export default connect(null, { verify })(Activate);