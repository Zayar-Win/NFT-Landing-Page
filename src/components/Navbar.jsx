import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/logo.png'
import Button from './Button'
const Navbar = () => {
    const [isNavOpen,setIsNavOpen] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll" , () => {
            setIsNavOpen(false)
        })
        return () => {
            window.removeEventListener('scroll',() => {
                setIsNavOpen(false)
            })
        }
    })
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className={`link ${isNavOpen ? "active" : ""}`}>
            <AiOutlineClose className='close' onClick={() => setIsNavOpen(false)} />
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Marketplace</a>
                </li>
                <li>
                    <a href="#">Sellers</a>
                </li>
                <li>
                    <a href="#">Create</a>
                </li>
            </ul>
        </div>
        <div className="menubar">
            <AiOutlineMenu onClick={() => setIsNavOpen(true)} />
        </div>
        <Button text="Contact" />
    </nav>
  )
}

export default Navbar