import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useLocation = (locationSearch) => {
  const[location,setlocation]=useState()

  useEffect(() => {
    let locationNumber
    if(locationSearch){
      locationNumber=locationSearch
    }else{
      locationNumber = Math.ceil(Math.random()*126)
    }
    axios.get(`https://rickandmortyapi.com/api/location/${locationNumber}`)
    .then(res => setlocation(res.data))
    .catch(err => console.log(err))
  }, [locationSearch])
  return location
}

export default useLocation