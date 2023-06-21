import React from 'react'
import Bold from '../components/bold'
import Text from '../components/text'
import Sections from '../components/sections'
import Email from '../components/email'
import Logo from '../components/logo'
import Reviews from '../components/reviews'
import Tools from '../components/tools'
import Images from '../components/images'
import Hero from '../components/hero'
import Oldman from '../components/oldman'
import Marketing from '../components/marketing'
import Training from '../components/training'
import Prompts from '../components/prompts'
import Footer from '../components/footer'
import Foot from '../components/foot'



const Home = () => {
  return (
     <>
      <Bold/>
       <Text/>
       <Email/>
       <Sections/>
       <h2 className='trust'>Trusted by 100,000+ local businesses globally</h2> <br/> <br/>
       <Logo/>
       <Reviews/>
       <h2 className='trust'>Tools to take your business to next level</h2>
       <Tools/><br/> <br/>
       <h2 className='trust'>SalesCaptain is designed for your business</h2><br/>
       <p className='select text-gray-500 text-xl'>Select your industry to see how it works</p>
       <Images/>
       
       <h2 className='trust-3'>Make your business stand out with us</h2>
      
       <Hero/>
       <Oldman/>
       <Marketing/>
       <Training/>
       <h2 className='trust-4'>Expert Insights and Resources</h2> <br/>
       <p className='select text-gray-500 text-xl'>Get the latest business intelligence relevant to your industry, designed to help you grow.</p>
      <br/> <br/>

      <Prompts/>
      <a href="https://salescaptain.com/#" className="text-blue-700 text-2xl resources">View all resources</a> 

      <br/>
      <Footer/>
      <Foot/>
     </>
  )
}

export default Home