import React from 'react'
import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import SideBar from "../../components/sidebar/SideBar"

const Home = () => {
  return (
    <div className="home">
        <SideBar/>
        <div className="container">
            <Navbar/>
            container
        </div>
    </div>
  )
}

export default Home
