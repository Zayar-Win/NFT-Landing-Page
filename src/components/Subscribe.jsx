import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Banner from "../assets/subscribe.png"

const Subscribe = () => {
  return (
    <section className="subscribe">
        <div className="content">
            <h2>Subscribe for Get update every New Offers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium delectus temporibus amet! Beatae aperiam deserunt labore vitae adipisci nisi ad quibusdam explicabo quam ab!</p>
            <div className="input-container">
                <input type="text" placeholder='Enter your Email' />
                <BsFillArrowRightCircleFill />
            </div>
        </div>
        <div className="image">
            <img src={Banner} alt="" />
        </div>
    </section>
  )
}

export default Subscribe