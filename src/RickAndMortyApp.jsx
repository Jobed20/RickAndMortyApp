import "./App.css";
import React, { useEffect, useState } from 'react'
import CardCharacter from './Components/ResidentInfo'
import LocationInfo from './Components/LocationInfo'
import useLocation from './Hooks/useLocation'
import InputSearch from './Components/InputSearch'


const RickAndMortyApp = () => {

  const [locationSearch, setlocationSearch] = useState()
  
const location = useLocation(locationSearch)
 

  return (
    

    <div className="App">
      <header>  
        <InputSearch  setlocationSearch ={setlocationSearch}/>
      </header>
    
      <LocationInfo location= {location}/>

      <div className="card-container">
        {location?.residents.map(resident =>(
          <CardCharacter resident = {resident} key={resident}/>
        ))}
      </div>

    </div>
  )
}

export default RickAndMortyApp