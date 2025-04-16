import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Shrill Slushy Manatee</title>
        <meta property="og:title" content="Shrill Slushy Manatee" />
      </Helmet>
      <span>Test Github</span>
      <img
        alt="image"
        src="/nume%C3%AC%C2%81riser%2014-200w.jpeg"
        className="home-image1"
      />
      <img src="/ap%2040.jpeg" alt="image" className="home-image2" />
    </div>
  )
}

export default Home
