import * as types from './actionTypes';
import axios from 'axios';

const API_URL = 'http://ts.ausgrads.academy:8765/user';

const loadUserSuccess = (data) => ({type: types.LOAD_USER_SUCCESS, data});
const loadUserError = (error) => ({type: types.LOAD_USER_ERROR, userHasErrored:error});
const loadUserLoading = (loading) =>({type: types.LOAD_USER_LOADING, userIsLoading:loading});

export function fetchUserByID(){
     const accessToken = localStorage.getItem('access_token');
     const url = `${API_URL}`;
    console.log(accessToken);
     return function (dispatch) { 
         dispatch(loadUserLoading(true));
         const request=axios.get(url, { headers: { authorization: `Bearer ${accessToken}` } });
         request
             .then((response) =>{ 
                 if(!response.status == 200)
                 {
                     throw Error(response.statusText);
                 }
                 dispatch(loadUserLoading(false));
                 
                 return response.data;
             })
             .then((data)=> 
              {console.log(data);
               dispatch(loadUserSuccess(data))})
             .catch((error)=>{
                console.log(error);
               dispatch(loadUserError(error))});
     };
 }