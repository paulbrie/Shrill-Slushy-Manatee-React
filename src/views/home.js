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
        src="https://images.unsplash.com/photo-1742201876722-85a042294575?ixid=M3w5MTMyMXwwfDF8YWxsfDJ8fHx8fHx8fDE3NDQ3Mzk0MDF8&amp;ixlib=rb-4.0.3&amp;w=200"
        alt="image"
        className="home-image1"
      />
      <img src="/ap%2040-200w.jpeg" alt="image" className="home-image2" />
    </div>
  )
}

export default Home
