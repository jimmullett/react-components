import { useState } from 'react'
import './App.css'

import Badge from './components/badge/Badge'
import Banner from './components/banner/Banner'
import Card from './components/card/Card'
import Testimonial from './components/testimonial/testimonial'

import cloudUploadIcon from '/src/assets/cloud-upload.svg';


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <h1>React Component Library</h1>
        <h2>Scrimba Advanced React Course - this is still a work in progress, check back for updates!</h2>
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

      <br />

      <h3>Cards</h3>
      <section>
        <Card 
          icon={cloudUploadIcon}
          backgroundColor="#3F75FE"
          title="Easy Deployment">
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
          </Card>
      </section>

      <br />

      <h3>Testimonials</h3>
      <section>
        <Testimonial
          name="May Andersons"
          image="MayAndersons.png"
          company="Workcation"
          jobTitle="CTO"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
        </Testimonial>
      </section>
    </main>
  )
};


