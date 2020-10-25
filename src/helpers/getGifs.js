



export const getGifs = async( category) =>{//                             encodeURI quita espacios y arregla para que el url quede bien
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=KxZKsS5ldygHFCMTbG4d65nGvCk1WaEP`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map (img => {
        return {
            id: img.id,
            title:img.title,
            url:img.images?.downsized_medium.url//recordar con el signo de ? es por si viene la info o no osea que es opcional
        }
    })

    return gifs;
}