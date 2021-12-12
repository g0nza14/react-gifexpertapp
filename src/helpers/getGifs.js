export const getGifs = async( category ) => {
    // PETICIÓN HTTP
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nESodg2lw17iz0aOD7kDoX79ktUGXWcP&q=${ encodeURI(category)}&limit=10`   
    // encodeURI HACE QUE SE ELIMINEN ESPACIOS QUE PUEDA TENER     
    const resp = await fetch( url );
    const { data } = await resp.json(); //la data son las imagenes 
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url : img.images.downsized_medium.url,
        }
    })
    // PETICION HTTP
    return gifs; //devuelve una promesa que resuelve la coleccion de imagenes
}