import React from 'react'

const Child1 = ( props) => {
     const { title, about } = props; 
  return (
    <>
     <div>child1</div>
     <h1>{title}</h1>
     <h1>{about}</h1>
    </>
  )
}

export default Child1