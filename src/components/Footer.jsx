import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import logo from "../assets/logo.png"

const Footer = () => {
    const servicesLinks = ["Art", "Common", "Trading", "Rare", "Generic"];
  const companyLinks = ["Home", "About", "Marketplace", "Sellers", "Create"];
  const contactInfo = [
    {
      icon: <MdEmail />,
      value: "kishanshet21@gmail.com",
    },
    {
      icon: <MdPhoneInTalk />,
      value: "+(480) 555-0103",
    },
    {
      icon: <IoLocationSharp />,
      value: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
  ];
  const socialIcons = [
    <AiFillFacebook />,
    <FaTwitterSquare />,
    <BsLinkedin />,
    <FaInstagramSquare />,
  ];
  return (
    <footer>
        <div className="container">
            <div className='sub-footer'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                <div className="social-icons">
                    {
                        socialIcons.map(icon => (
                            <div className="icon">{icon}</div>
                        ))
                    }
                </div>
            </div>
            <div className='sub-footer'>
                <h3>Our Services</h3>
                <ul className='list'>
                    {
                        servicesLinks.map(link => (
                            <li>
                                <a href="#">{link}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='sub-footer'>
                <h3>Company</h3>
                <ul className='list'>
                    {
                        companyLinks.map(company => (
                            <li>
                                <a href="#">{company}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='sub-footer'>
                <h3>Contact us</h3>
                <ul>
                {
                    contactInfo.map(contact => (
                        <li>
                            <div className='icon'>{contact.icon}</div>
                            <p>{contact.value}</p>
                        </li>
                    ))
                }
                </ul>
            </div>
     </div>
    </footer>
  )
}

export default Footer