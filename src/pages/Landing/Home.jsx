import React from 'react'
import { Header } from '../../components/subComponent/Header/Header'
import { LandingImage } from '../../components/subComponent/LandingImage/LandingImage'
import { Features } from '../../components/subComponent/Features/Features'
import { OurTeam } from '../../components/subComponent/OurTeam/OurTeam'
import { Types } from '../../components/subComponent/Types/Types'
import { LatestNews } from '../../components/subComponent/LatestNews/LatestNews'
import { ContactUs } from '../../components/subComponent/ContactUs/ContactUs'

const Home = () => {
  return (
    <>
        <Header/>
        <LandingImage/>
        <Features/>
        <OurTeam/>
        <LatestNews/>
        <Types/>
        <ContactUs/>
    </>
  )
}

export default Home