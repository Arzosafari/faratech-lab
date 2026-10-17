import Hero from '../sections/Hero.jsx'
import Ticker from '../components/Ticker.jsx'
import WhatWeDo from '../sections/WhatWeDo.jsx'
import SelectedWork from '../sections/SelectedWork.jsx'
import HowWeWork from '../sections/HowWeWork.jsx'
import WhyFaraTech from '../sections/WhyFaraTech.jsx'
import MeetFounders from '../sections/MeetFounders.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <WhatWeDo />
      <SelectedWork />
      <HowWeWork />
      <WhyFaraTech />
      <MeetFounders />
    </>
  )
}
