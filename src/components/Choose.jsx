import React from 'react'
import Banner from "../assets/choose.png";
import Button from './Button'

const Choose = () => {
  return (
    <section className="choose">
        <div className="image">
            <img src={Banner} alt="" />
        </div>
        <div className="content">
            <h2>Why should you Choose Our Website ?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.</p>
            <Button text="Read more" blue />
        </div>
    </section>
  )
}

export default Choose