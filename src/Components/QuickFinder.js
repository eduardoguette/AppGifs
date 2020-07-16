import React from "react"
import { Link } from "wouter";
import "./QuickFinder.css"

const populares = [
  "Bailar","Molesto","Ay Dios Mio","MeGusta","Ayayai","De nada","Flojera","Estresado","Avergonzado","Aplausos","Te la creiste","Buena suerte","Chócala","Obvio","Aww","Aburrido","Loco","Loquesea","Suspiro","Besos","Buenas noches","Calma", "Llorar", "Si","No","Lo sieto","Con suerño","Hola","Abrazos","Vale","Por favor","Gracias","Guiño","Me vale","Sonrisa","Atónito","Feliz","Incómodo","Enfadado", "Asco", "Ups", "Increible", "Nervios", "Amor","Bailar", "Te extraño",
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
