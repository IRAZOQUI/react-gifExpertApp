
import React  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


//useEffect sirve para correr cierto codigo que queramos de forma condicional para que no se este haciendo cada que realizamos un cambio
export const GifGrid =  ({ category }) => {

///         con : podemos renombrar dentro de la desestructuracion
    const {data:images,loading} = useFetchGifs (category);


    return(
        <>
            <h3> { category } </h3>
           {loading && <p className="loading">Loading</p>}
            <div className="card-grid">
                    {
                        images.map(img=>(
                            <GifGridItem  
                            key= { img.id }
                            { ...img } />
                        ))
                    }
            </div>
        </>
    )
}