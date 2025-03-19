import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Asthma Solutions</title>
        <meta property="og:title" content="Page - Asthma Solutions" />
      </Helmet>
    </div>
  )
}

export default Page
