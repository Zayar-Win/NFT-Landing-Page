import React from 'react'
import Navbar from './Navbar'
import heroText from '../assets/heroText.png'
import Button from './Button'
import Banner from "../assets/hero.png"

const Home = () => {
  return (
    <section className='home'>
        <Navbar />
        <div className="container">
            <div className="content">
                <h1>
                    Explore Our{" "}
                    <span>
                    <img src={heroText} alt="Hero Text" />
                    </span>{" "}
                    Digital NFT Market Place
                </h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard.
                </p>
                <div className="buttons">
                    <Button text="Explore Now" blue />
                    <Button text="Create NFT" />
                </div>
                <div className="data">
                    <div className="dataTab">
                        <h2>40K</h2>
                        <p>ArtWorks</p>
                    </div>
                    <div className="dataTab">
                        <h2>20K</h2>
                        <p>Actions</p>
                    </div>
                    <div className="dataTab">
                        <h2>20K</h2>
                        <p>Artists</p>
                    </div>
                    
                </div>
            </div>
            <div className="image">
                <img src={Banner} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Home