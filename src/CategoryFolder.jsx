import React, { useEffect, useState } from 'react';
import axios from "axios"

const CategoryFolder = () => {
    const [currentState,setCurrentState]= useState()
    const getData = () => {
        axios
          .get(`https://fakestoreapi.com/products`)
          .then((response) => setCurrentState (response?.data)
          )}
          useEffect(() => {
        
            getData();
                 }, []);
        
  return (
    <div>CategoryFolder</div>
  )
}

export default CategoryFolder;