import React from "react"
import spinner from "../loading.gif"
export default function Spinner(){
  return (
    <div className="spinner" id="spinner">

      <img className="img-spinner" src={spinner} alt="spinner"/>
    </div>
  )
}