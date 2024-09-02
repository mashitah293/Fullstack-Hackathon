import React from 'react'
function Ecom(props) {
  return (
    <div>
      <h1>{props.names}</h1>
      <h2>{props.items}</h2>
      <h3>{props.songs}</h3>
      <button onClick={() => props.chk()}>click me</button>
    </div>


  )
} export default Ecom
