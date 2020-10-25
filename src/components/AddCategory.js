import React, { useState } from 'react'
import  PropTypes  from 'prop-types';

export const AddCategory = ({setcategorias,categorias}) => {//desestrururamos para resibir los elementos de setcategoria

    const [inputValue, setinputValue] = useState(' ');

    const handleInputChange = (e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length >2){
            
            //console.log('Bien hecho')
            setcategorias([inputValue,...categorias]);
            setinputValue('');//asi limpio el valor para que no se ponga dos veces sin querer
        }

    }
    return (
        // la linea de abajo es para actualizar al dar enter 
        <form onSubmit={handleSubmit} > 
            <>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange }
                />
            
            </>
        </form>
    )
}
AddCategory.protoTypes={
    setcategorias: PropTypes.func.isRequired
}