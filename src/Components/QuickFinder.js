import React from "react"
import { Link } from "wouter";
import "./QuickFinder.css"

const populares = [
  "Feliz","Incomodo","Enfadado", "Asco", "Ups", "Increible", "Nervios", "Amor","Bailar", "Te extraño"
]

export default function QuickFinder() {
  return (
    <div className="quick-finder">
      <Link to="/">Home</Link>
      {
        populares.map((popular,i) =>  <Link to={`/gif/${popular}`} key={i}>{popular}</Link>)
      }
    </div>
  )
}
