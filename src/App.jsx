import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Badge from "./components/badge/Badge"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Component Library</h1>
      <h2>Scrimba Advanced React Course</h2>

      <h3>Badges</h3>
      {/* square badges */}
      <section className="badges">
        <Badge color="gray">Badge</Badge>
        <Badge color="red">Badge</Badge>
        <Badge color="yellow">Badge</Badge>
        <Badge color="green">Badge</Badge>
        <Badge color="blue">Badge</Badge>
        <Badge color="indigo">Badge</Badge>
        <Badge color="purple">Badge</Badge>
        <Badge color="pink">Badge</Badge>
      </section>

      {/* pill badges */}
      <section className="badges">
        <Badge color="gray" pill>Badge</Badge>
        <Badge color="red" pill>Badge</Badge>
        <Badge color="yellow" pill>Badge</Badge>
        <Badge color="green" pill>Badge</Badge>
        <Badge color="blue" pill>Badge</Badge>
        <Badge color="indigo" pill>Badge</Badge>
        <Badge color="purple" pill>Badge</Badge>
        <Badge color="pink" pill>Badge</Badge>
      </section>
    </>
  )
}

export default App

// <div>
// <a href="https://vite.dev" target="_blank">
// <img src={viteLogo} className="logo" alt="Vite logo" />
// </a>
// <a href="https://react.dev" target="_blank">
// <img src={reactLogo} className="logo react" alt="React logo" />
// </a>
// </div>
// <h1>Vite + React</h1>
// <div className="card">
// <button onClick={() => setCount((count) => count + 1)}>
// count is {count}
// </button>
// <p>
// Edit <code>src/App.jsx</code> and save to test HMR
// </p>
// </div>
// <p className="read-the-docs">
// Click on the Vite and React logos to learn more
// </p>
