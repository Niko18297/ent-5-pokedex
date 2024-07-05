import React, { useRef } from 'react';
import { setTrainer } from '../store/slices/trainer.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css';
const HomePage = () => {

   const dispatch = useDispatch();

   const navigate = useNavigate();

   const textInput = useRef();

const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTrainer (textInput.current.value.trim()));
    textInput.current.value = '';
    navigate('/pokedex');
}

  return (
    <div className='pokehome'>
        <figure className='pokehome__img'>
        <img src="../../../assets/pokedex.png" alt="pokedex image" />
        </figure>
        <h1 className='pokehome__greeting'>Hi trainer!</h1>
        <p className='pokehome__name'>To start give me your name</p>
        <form className='pokehome__submit' onSubmit={handleSubmit}>
          <input ref={textInput} type="text" />
          <button className='pokehome__button'>Start</button>
        </form>
    </div>
  )
}

export default HomePage;