import React from "react"
import spinner from "../loading.gif"
export default function Spinner(){
  return (
    <div className="spiner">

      <img className="spinner" src={spinner} alt="spinner"/>
    </div>
  )
}