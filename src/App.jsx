import React from 'react'
import Child1 from './components/child1'
import Child2 from './components/child2'
import Child3 from './components/child3'


const App = () => {
  return (
    <>
    <div className='bg-red-400 p-40 '>
     <Child1 title="hellokese ho " about="badiah h " />
     <Child2/>

     <Child3 title="kesaiyan ba" about="helkal"  >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, aut.

     </Child3>
    </div>
    </>

  )
}

export default App