import React from "react";
import Header from "./components/Header";
import data from "./data.json"
console.log(data)
export default function App () {
  const card = data.map(item => {
    return (
      <Header 
        name={item.name}
        temperature={item.temperature}
      />
    )
    
  })

  return (
    <div>
      {card}
    </div>
  )
}
