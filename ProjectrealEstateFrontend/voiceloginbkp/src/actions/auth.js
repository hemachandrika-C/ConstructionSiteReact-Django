import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    LOG_OUT,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAILURE,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAILURE

}from './types'

import axios from 'axios'


export const checkAuthenicated=() =>async dispatch =>{
    if(localStorage.getItem('access')){
        const config={
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        };

        const body = JSON.stringify({token:localStorage.getItem('access') });
        
        try{
            const res = await axios.post(`http://localhost:8000/auth/jwt/verify/`,body,config)
            if(res.data.code !== 'token_not_valid'){
                dispatch({
                    type:AUTHENTICATION_SUCCESS
                })

            }else{
                dispatch({
                    type:AUTHENTICATION_FAILURE
                })

            }
         
        }catch (err){
            dispatch({
                type:AUTHENTICATION_FAILURE
            })

        }

    }else{
        dispatch({
            type:AUTHENTICATION_FAILURE
        })
    }
}

export const load_user = () => async dispatch=>{
    if(localStorage.getItem('access')){
        const config={
            headers:{
                'Content-Type':'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`,
                'Accept':'application/json'
            }
        };

        
    try{
        const res = await axios.get(`http://localhost:8000/auth/users/me/`,config);
        dispatch({
            type:LOAD_USER_SUCCESS,
            payload:res.data
        })
      }catch(err){
          dispatch({
              type:LOAD_USER_FAILURE        
          })
  
      }

    }else{
        dispatch({
            type:LOAD_USER_FAILURE
        })
    }



    

}

export const login=(email,password)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    };

    const body = JSON.stringify({email,password});

    try{
      const res=await axios.post(`http://localhost:8000/auth/jwt/create/`,body,config);
      dispatch({
          type:LOGIN_SUCCESS,
          payload:res.data
      })
     
      dispatch(load_user())


    }catch(err){
        dispatch({
            type:LOGIN_FAIL,           
        })

    }

}

export const reset_password = (email) =>async dispatch=>{
    
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    };

    const body=JSON.stringify({email});

    try{
        await axios.post(`http://localhost:8000/auth/users/reset_password/`,body,config);

        dispatch({
            type:PASSWORD_RESET_SUCCESS
        })

    }catch(err){
        dispatch({
            type:PASSWORD_RESET_FAILURE
        })
        

    }

}


export const reset_password_confirm = (uid,token,new_password,re_new_password) =>async dispatch =>{
    const config={
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    };

    
    const body = JSON.stringify({uid,token,new_password,re_new_password});
    
    try{
        await axios.post(`http://localhost:8000/auth/users/reset_password_confirm/`,body,config);

        dispatch({
            type:PASSWORD_RESET_CONFIRM_SUCCESS
        })

    }catch(err){
        dispatch({
            type:PASSWORD_RESET_CONFIRM_FAILURE
        })
        

    }


}

export const logout= () =>dispatch =>{
    dispatch({
        type: LOG_OUT
    })
}



export const signup=(name,email,password,re_password)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    };

    const body = JSON.stringify({name,email,password,re_password});

    try{
      const res=await axios.post(`http://localhost:8000/auth/users/`,body,config);
      dispatch({
          type:SIGNUP_SUCCESS,
          payload:res.data
      })
     
    }catch(err){
        dispatch({
            type:SIGNUP_FAILURE,           
        })

    }

}

export const verify = (uid,token) => async dispatch =>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    };

    const body = JSON.stringify({uid,token});

    try{
      await axios.post(`http://localhost:8000/auth/users/activation/`,body,config);
      dispatch({
          type:ACTIVATION_SUCCESS,
         
      })
     
    }catch(err){
        dispatch({
            type:ACTIVATION_FAILURE,           
        })

    }
}