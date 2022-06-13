import React, { useEffect, useState } from 'react'
import useCharacterApi from '../Hooks/useCharacterApi'

const ResidentInfo = ({resident}) => {
  const character = useCharacterApi(resident)
  
  const changestatus = {
    unknown: "grey",
    Alive: "green",
    Dead: "red",
    
  };


  return (
    <article className='Card'>
      <img src={character?.image} alt="characters" />
      <h2>{character?.name}</h2>
      <p >Status: {character?.status} 
       <div className="Status"
          style={{ background: changestatus[character?.status] }}>
       </div>
      </p>
      <p>Origen: {character?.origin.name}</p>
      <p>Episodes where appears: {character?.episode.length}</p>

    </article>
  )
}

export default ResidentInfo