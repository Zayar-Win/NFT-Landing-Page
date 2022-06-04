import React from 'react'
import Sell1 from "../assets/sell1.png";
import Sell2 from "../assets/sell2.png";
import Sell3 from "../assets/sell3.png";
import Button from "./Button"

const CreateAndSell = () => {
    const data = [
        {
            image:Sell1,
            title:"Create your NFT",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
            buttonText:"Create"
        },
        {
            image:Sell2,
            title:"Add your NFT",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
            buttonText:"Add NFT"
        },
        {
            image:Sell3,
            title:"List them for sale",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
            buttonText:"Sell Now"
        },
    ]
  return (
    <section className="createandsell">
        <div className="title">
            <h2>Create and Sell Your NFTs</h2>
      </div>
      <div className='container'>
          <div className="content">
              {
                  data.map((data,index) => (
                      <div className="card">
                          <div className="image">
                              <img src={data.image} alt="" />
                          </div>
                          <h3>{data.title}</h3>
                          <p>{data.description}</p>
                        <Button text={data.buttonText} blue={index === 1} />
                      </div>
                  ))
              }
          </div>
      </div>
    </section>
  )
}

export default CreateAndSell