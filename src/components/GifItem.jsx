//import React from 'react'
//rafc TAB para que se escriba automaticamente toda la estructura del componente

export const GifItem = ({title, url, id}) => {

  return (

    <div className="card">
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}
