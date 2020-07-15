import React, { useState, useEffect } from 'react';
import Gif from './Gif'
import getGif from '../Services/getGifs'

export default function ListOfGifs({ params }) {
  console.log(params)
  const { keyword } = params

  const [gifs, setGifs] = useState([]);

  useEffect(function () { 
    getGif({ keyword })
      .then(gifs => setGifs(gifs))
  }, [keyword]); 

  return <div className="container-cards">
    {
      gifs.map(({ id, url }) =>
        <Gif
          key={id}
          url={url}
        />
      )
    }
  </div>
}
//