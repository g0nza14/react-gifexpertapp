import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import {getGifs} from '../helpers/getGifs';
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category ).then( imgs => {

            setState({
                data: imgs, // las imagenes las regreso como un objeto llamado data
                loading: false //pues ya termine de cargar
            });

            
        })
    }, [category])


    //el uso de useState indica a otros comoponentes cuando deben renderizarse nuevamente debido a un cambio
    return state;
}