import React from 'react'
import './Home.css'


import Aurora from '../components/Aurora';
import InfiniteMenu from '../components/InfiniteMenu';
import GlitchText from '../components/GlitchText'

const Home = () => {

  const items = [
    {
      image: '../../images/fullstackApp.png',
      link: '/services',
      title: 'Item 1',
      description: 'This is pretty cool, right?'
    },
    {
      image: '../../images/landingPages.png',
      link: '/services',
      title: 'Item 2',
      description: 'This is pretty cool, right?'
    },
    {
      image: '../../images/websiteDesign.png',
      link: '/services',
      title: 'Item 3',
      description: 'This is pretty cool, right?'
    },
    {
      image: '../../images/freelance.png',
      link: '/services',
      
      title: 'Item 4',
      description: 'This is pretty cool, right?'
    }
  ];



  return (
    <>
      <div id='home'>
        <div id='homeMain'>
          <div id='aurora'>
            <Aurora
              colorStops={["#ff00dd", "#666bff", "#00ff1e"]}
              blend={0.3}
              amplitude={1.0}
              speed={0.5}
            />
          </div>
        </div>
        <div>
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={false}
            className='custom-class'
          >
            Services
          </GlitchText>
        </div>
        <div id='globe'>
          <div id='infiniteMenu' >
            <InfiniteMenu items={items} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home