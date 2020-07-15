import React from 'react';
import "./Gif.css"


export default function Gif({ title, url, id }) {
  return (
    <picture className="card-gif">
      <img loading="lazy" src={url} alt={title} width="150" height="150"/>
      <a href={`#${id}`} className="link">
      </a>
    </picture>
  )
}