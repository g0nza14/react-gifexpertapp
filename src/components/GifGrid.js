import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );
    //es decir, data:images quiere decir RENOMBRA data COMO images
    

    // useEffect( () => {
    //     getGifs( category ).then( imgs => setImages(imgs));
    // }, [ category ]) 
    // [] es un arreglo de dependencias el hecho de que este vacío quiere decir que está en el cuerpo de la función se ejecutará una vez
    // Pero como se le pasa el category que GifGrid tiene como arguemento, quiere decir que si la categoria CAMBIARA ejecuataría de nuevo el useEffect

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{ category }</h3>

            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            
            <div className = "card-grid">
            
                {
                    images.map( img => { //desestructuro para no hacer img.id y img.title
                        return <GifGridItem key = { img.id } {...img} />
                    })
                }
                
            </div>

            {/* <div className = "card-grid">
            
                {
                    images.map( img => { //desestructuro para no hacer img.id y img.title
                        return <GifGridItem key = { img.id } {...img} />
                    })
                }
                
            </div> */}
        </>
    )
}
