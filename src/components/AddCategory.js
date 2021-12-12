import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories}) => {
    
    const [inputValue, setInputValue] = useState(''); //para evitar el undefined y el consiguiente error

    const handleInputValue = (e) => {
        setInputValue( e.target.value );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length >= 2 ){
            setCategories( cats => [ inputValue, ...cats ] ); // ...cats, inputValue --> pone las nuevas a lo ultimo
            setInputValue('');
        } 
        
    }
    
    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type='text'
                value={ inputValue }
                onChange = { handleInputValue }
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired 
}
