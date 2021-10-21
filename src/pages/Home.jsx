import React from 'react'

// Styles
import '@styles/Home.scss'

// Components
import { SocialMediaBar } from '@components/SocialMediaBar'

const Home = () => {
  return (
    <>
      <div className='tfttContainer'>
        <div className='tfttSubcontainer'>
          <h1 className='tfttTitle'>TALES FROM THE<span> TRAP</span></h1>
          <h3 className='tfttSubtitle'>FILM SYNOPSIS</h3>
          <p className='paragraph1'>Is a gritty no holds barred look at the world faced by many  UK's streets and council estates youths of today. A tale of gang culture, knife crime and cross county drug deals, however more than that Tales From The Trap is a story of brotherhood, loyalty and a friendship that runs deeper than any family.</p>
          <p className='paragraph1'>Slick is a rising star in the UK Rap & Drill Music scenes as part of the SE8 crew who are tearing up the music scene, however with a rise in success also comes a rise in status and all the dangers that come with it. Soon the SE8’s friendship is tested to the limit as rival gangs, bent coppers, older drillers and dealers, fate and circumstances force these youths hand with deadly consequences.</p>
          <p className='paragraph2'>Tales From The Trap is as powerful and hard hitting as it is heartwarming and tells the story, which is all too familiar on today’s streets and council estates</p>
          <SocialMediaBar />
        </div>
      </div>
    </>
  )
}

export default Home
