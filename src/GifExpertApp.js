import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp=()=>{

    //const categorias=['Bleach', 'BornTheWitch', 'Naruto'];//no usremos esta forma por si queremos agregar mas categorias
    const [categorias, setcategorias] = useState(['Bleach']);
    // const handleAdd = ()=>{
    //     setcategorias([...categorias,'Noragami']);//usando el operador expres podemos agregar guardando los elementos que ya teniamos
    // }
    return(
        <>
         <h2> GifExpertApp </h2>
         <AddCategory  setcategorias={setcategorias}categorias={categorias} />
         <hr />
{/*          <button onClick={handleAdd}>Agregar</button>
 */}         <ol>
            {
                categorias.map(category =>(
                    //return <li key={ category }> { category }  </li>
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
         </ol>
        </>

    )
}