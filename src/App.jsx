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
