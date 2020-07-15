import React from 'react';
import "./Gif.css"


export default function Gif({ url, id }) {
  return (
    <picture>

      <img loading="lazy" src={url} alt={id} width="150" height="150" />

    </picture>
  )
}