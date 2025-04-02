'use client'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import WorkExperience from './components/WorkExperience'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <WorkExperience />
    </>
  );
}
