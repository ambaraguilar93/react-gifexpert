
//rafc TAB para que se escriba automaticamente toda la estructura del componente
//esto es un custom hook

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


//import React from 'react'

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true);
    
    const getImages = async() => {

        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);

    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
  
}
