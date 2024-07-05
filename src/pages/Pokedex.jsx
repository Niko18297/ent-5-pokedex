import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedex/PokeCard';
import PokeSelect from '../components/pokedex/PokeSelect';
import './styles/pokedex.css';
const Pokedex = () => {
  
  const trainer = useSelector((store) => store.trainer); 
  const [inputValue, setInputValue] = useState('');
  const [typeFilter, setTypeFilter] = useState()
  
  const [pokemons, getPokemons, getType] = useFetch();
  
  
  useEffect(() => {
    if (typeFilter) {
      getType(typeFilter);
    } else {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=12';
    getPokemons(url);
  }
  }, [typeFilter]);

   const textInput = useRef();
  
   const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.trim().toLowerCase());
    textInput.current.value = '';
   }

   const cbFilter = (poke) => {
       return poke.name.includes(inputValue);
   }

  return (
    <div className='pokedex'>
       <h3 className='pokedex__wave'><span>Welcome {trainer},</span>here you could find your favorite pokemon, let's go!</h3>
     <div className='pokedex__filters'>
         <form className='pokedex__form' onSubmit={handleSubmit}>
           <input ref={textInput} type="text" />
           <button className='pokedex__button'>Search</button>
         </form> 
         <PokeSelect
         setTypeFilter={setTypeFilter}
         />
     </div>
     <div className='pokedex__container'>
        {
          pokemons?.results.filter(cbFilter).map((poke) => (
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
          ))
        }
     </div>
   </div>
  )
}

export default Pokedex;
