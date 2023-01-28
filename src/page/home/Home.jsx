import React from 'react'
import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import SideBar from "../../components/sidebar/SideBar"
import Widget from '../../components/widget/Widget'

const Home = () => {
  return (
    <div className="home">
        <SideBar/>
        <div className="container">
            <Navbar/>
            
            <div className="widgets">
              <Widget type="user" />
              <Widget type="order"/>
              <Widget type="earning"/>
              <Widget type="balance"/>
            </div>
        </div>
    </div>
  )
}

export default Home
