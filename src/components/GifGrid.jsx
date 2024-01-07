//rafc TAB para que se escriba automaticamente toda la estructura del componente
//import React from 'react'

import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
        <h3>{category}</h3>

        {
          //forma simplificada de un if
          isLoading && (<h2>Cargando...</h2>)
        }

        {/* //no puede ser class porque en JS eso esta reservado para JS y no para HTML */}
        <div className="card-grid"> 
          {
            images.map( img => (
              <GifItem 
                key={img.id}
                title={img.title}
                url={img.url}
                // {...img} el spread me muestra todas las props (properties) y me ahorraria tener que llamarlas una a una
              />
            ))
          }
        </div>
        
    </>
  )
}
