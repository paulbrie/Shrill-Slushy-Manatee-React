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
        src="/nume%C3%AC%C2%81riser%2014.jpeg"
        className="home-image1"
      />
      <img alt="image" src="/ap%2040.jpeg" className="home-image2" />
      <img alt="image" src="/scan%209.jpeg" className="home-image3" />
      <img alt="image" src="/turzii%201.png" className="home-image4" />
      <img alt="image" src="/turzii%202.png" className="home-image5" />
      <img alt="image" src="/turzii%203.png" className="home-image6" />
    </div>
  )
}

export default Home
