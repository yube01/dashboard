import React from 'react'
import "./navbar.scss"
import search from "../../assets/search.png"
import globe from "../../assets/globe.png"
import moon from "../../assets/moon.png"
import full from "../../assets/full.png"
import bell from "../../assets/notification.png"
import msg from "../../assets/msg.png"
import bar from "../../assets/bar.png"
import panda from "../../assets/panda.jpg"




const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <img src={search} alt=""className='icon' />
        </div>
        <div className="items">
          <div className="item">
            <img src={globe} alt="" className='icon'/>
            English
           </div>
           <div className="item">
            <img src={moon} alt="" className='icon'/>
            
           </div>
           <div className="item">
            <img src={full} alt="" className='icon'/>
            
           </div>
           <div className="item">
            <img src={bell} alt="" className='icon'/>
            <div className="color">1</div>
            
           </div>
           <div className="item">
            <img src={msg} alt="" className='icon'/>
            <div className="color">2</div>
            
           </div>
           <div className="item">
            <img src={bar} alt="" className='icon'/>
            
           </div>
           <div className="item">
            <img src={panda} alt="" className='panda'/>
            
           </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar