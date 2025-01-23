import { useState } from 'react'
import './App.css'

import Badge from "./components/badge/Badge"
import Banner from "./components/banner/Banner"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <h1>React Component Library</h1>
        <h2>Scrimba Advanced React Course</h2>
      </header>

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

      <br />

      <h3>Banners</h3>
      <section className="banners">
        <div>
          <Banner status="success" title="Congratulations!">
            This is some additional information that is likely very flattering.
          </Banner>
          <Banner status="warning" title="This a warning">
            This is some additional information that is likely very cautionary.  <span style={{fontWeight: 600}}>Putting in some addtional text to test the wrap and using additional HTML tags.</span>
          </Banner>
          <Banner status="error" title="This is an error">
            This is some additional information that is likely very disturbing.
          </Banner>
          <Banner status="info" title="This is some info">
            This is some additional information that is likely very informative.
          </Banner>
        </div>
        <div>
          <Banner status="success" title="Congratulations!"></Banner>
          <Banner status="warning" title="This a warning"></Banner>
          <Banner status="error" title="This is an error"></Banner>
          <Banner status="info" title="This is some info"></Banner>
        </div>
      </section>
    </main>
  )
}

export default App
