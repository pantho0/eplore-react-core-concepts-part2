import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import counter from './counter'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    alert('button clicked')
  }
  function addToFive(num) {
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => { alert('third clicked') }}>third</button>
      <button onClick={() => addToFive(10)}>Four</button>
    </>
  )
}

export default App
