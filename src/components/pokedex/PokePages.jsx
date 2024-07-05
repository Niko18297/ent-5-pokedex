import React from 'react';
import './styles/pokePages.css';

const PokePages = ({page, setPage, total}) => {
  
  const handleLess = (num) => {
    if (page > num) {
        setPage(page - num);   
    }  else {
        setPage(total);
    }
     }

  const handlePlus = (num) => {
      if (page <= total-num) {
        setPage(page + num);
      }
      else {
        setPage(1);
      }
  }
  
   return (
    <div className='pokepages'>
        <button onClick={()=> {handleLess(1)}}>{'<'}</button>
        <button onClick={()=> {handleLess(10)}}>{'<<'}</button>
        <button onClick={()=> {handleLess(50)}}>{'<<<'}</button>
        <span>{page} / {total}</span>
        <button onClick={()=> {handlePlus(1)}}>{'>'}</button>
        <button onClick={()=> {handlePlus(10)}}>{'>>'}</button>
        <button onClick={()=> {handlePlus(50)}}>{'>>>'}</button>
    </div>
  )
}

export default PokePages;