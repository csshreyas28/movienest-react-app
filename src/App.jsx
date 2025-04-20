import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
   <div>
    <p>hello world!</p>
   </div>
    <Text display="hello!!!!"/>
    <Text display="what's up"></Text>
   </>
  )
}

function Text({display}) {    /* here, 'display' is the prop */
  return (
  <div>
    <p>Hey, {display}</p>
  </div>
  );
}

export default App
