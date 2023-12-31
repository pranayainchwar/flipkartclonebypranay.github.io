import axios from 'axios';

// import { GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL } from '../constants/productConstants'; 
 //or
 import * as actionTypes from '../constants/productConstants'; 

const URL = "https://flipkart-backend-mvmk.onrender.com";
//http://localhost:8000 (for deveopeing mode )


export const getProducts =()=> async (dispatch)=>{
 try{
    const {data}= await axios.get(`${URL}/products`);
      dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload:data})
 }catch(error){
  dispatch({type:actionTypes.GET_PRODUCTS_FAIL, payload: error.message})
 }
}

export const getProductDetails =(id)=> async (dispatch)=>{
  try{
     dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});
      
    const { data } = await axios.get(`${URL}/product/${id}`);
     dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
 
  }catch(error){
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message });

  }
}
