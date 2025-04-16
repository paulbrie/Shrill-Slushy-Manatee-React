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
        className="home-image10"
      />
      <img alt="image" src="/ap%2040.jpeg" className="home-image11" />
      <img alt="image" src="/scan%209.jpeg" className="home-image12" />
      <img alt="image" src="/turzii%201.png" className="home-image13" />
      <img alt="image" src="/turzii%202.png" className="home-image14" />
      <img alt="image" src="/turzii%203.png" className="home-image15" />
      <img alt="image" src="/turzii4.png.png" className="home-image16" />
      <img alt="image" src="/turzii%205.png" className="home-image17" />
      <img alt="image" src="/turzii%20332.png" className="home-image18" />
      <img alt="image" src="/turzii%206.png" className="home-image19" />
    </div>
  )
}

export default Home
