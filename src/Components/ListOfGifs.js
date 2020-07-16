import React, { useState, useEffect } from 'react';
import Gif from './Gif'
import getGif from '../Services/getGifs'
import Spinner from './Spinner';

export default function ListOfGifs({ params }) {
  const { keyword } = params
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    setLoading(true)

    getGif({ keyword })
      .then(gifs => {
        setTimeout(() => {
          setLoading(false)
          setGifs(gifs)
        }, 500)
      })
  }, [keyword]);

  return <div className="container-cards">
    {
      loading ? <Spinner /> : gifs.map(({id, url}) =><Gif key={id} url={url} />)
    }
  </div>
}
//