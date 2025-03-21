import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Asthma Solutions by ChiroHealot</title>
        <meta
          name="description"
          content="Discover natural and effective asthma relief with ChiroHealot's innovative approach. Our holistic solutions integrate advanced chiropractic care, kinesiology, and essential oil therapy to improve breathing and overall lung health. Experience safe, drug-free relief today!"
        />
        <meta
          property="og:title"
          content="Page - Asthma Solutions by ChiroHealot"
        />
        <meta
          property="og:description"
          content="Discover natural and effective asthma relief with ChiroHealot's innovative approach. Our holistic solutions integrate advanced chiropractic care, kinesiology, and essential oil therapy to improve breathing and overall lung health. Experience safe, drug-free relief today!"
        />
      </Helmet>
    </div>
  )
}

export default Page
