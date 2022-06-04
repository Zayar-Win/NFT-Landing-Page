import React from 'react'
import Button from './Button';
import marketplace1 from "../assets/marketplace1.png"
import marketplace2 from "../assets/marketplace2.png"
import marketplace3 from "../assets/marketplace3.png"
import marketplace4 from "../assets/marketplace4.png"
import marketplace5 from "../assets/marketplace5.png"
import marketplace6 from "../assets/marketplace6.png"
import marketplace7 from "../assets/marketplace7.png"
import marketplace8 from "../assets/marketplace8.png"
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
const MarketPlace = () => {
    const cards = [
        {
          image: marketplace1,
          name: "Aiboi-meta",
        },
        {
          image: marketplace2,
          name: "Pedram-mohamm...",
        },
        {
          image: marketplace3,
          name: "Eduardo-pena",
        },
        {
          image: marketplace4,
          name: "Daeho-cha",
        },
        {
          image: marketplace5,
          name: "Justine-florentino",
        },
        {
          image: marketplace6,
          name: "Hoang-l-p-solan",
        },
        {
          image: marketplace7,
          name: "Joshua-jay",
        },
        {
          image: marketplace8,
          name: "Joshua-jay",
        },
      ];
    const marketPlaceType = [
        "All",
        "Art",
        "Generic",
        "Common",
        "Trading",
        "Rare",
      ];
  return (
    <section className="marketplace">
        <div className="title">
            <h2>NFT MarketPlace</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi soluta voluptate porro praesentium aut nobis! Quis provident impedit hic temporibus.</p>
        </div>
        <div className="marketplaceTypes">
            {
                marketPlaceType.map((type,index) => (
                    <Button text={type} blue={index === 0} />
                ))
            }
        </div>
        <div className="card-container">
            {
                cards.map(card => (
                    <div className="card">
                        <div className="image">
                            <img src={card.image} alt="" />
                        </div>
                        <div className="name">
                            <h4>{card.name}</h4>
                            <BsThreeDots />
                        </div>
                        <h6 className='username'>@zayarwin</h6>
                        <div className="price-container">
                            <h5 className="price">5.5ETH</h5>
                            <FaEthereum />
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default MarketPlace