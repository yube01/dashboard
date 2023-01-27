import React from 'react'
import Dash from "../../assets/dash.png"
import User from "../../assets/user.png"
import product from "../../assets/product.png"
import order from "../../assets/order.png"
import delivery from "../../assets/delivery.png"
import stats from "../../assets/stats.png"
import notification from "../../assets/notification.png"
import system from "../../assets/syatem.png"
import logs from "../../assets/logs.png"
import setting from "../../assets/setting.png"
import profile from "../../assets/profile.png"
import logout from "../../assets/log out.png"


import "./sidebar.scss"

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        
          <span  className="logo" >
            yubeadmin
          </span>

          
        
      </div>

      <hr />
      <div className="center">
        <ul>
          <p className='subhead'> MAIN </p>
          <li>
            <img src={Dash} alt=""  className='icon' />
             <span> Dashboard</span> </li>

           


             <p className='subhead'> LISTS </p>
          <li> 
          <img src={User} alt=""  className='icon' />
            <span> Users</span> </li>
          <li> 
          <img src={product} alt=""  className='icon' />
            <span> Products</span> </li>
          <li> 
          <img src={order} alt=""  className='icon' />
            <span> Orders</span> </li>
          <li> 
          <img src={delivery} alt=""  className='icon' />
            <span> Delivery</span> </li>

            


            <p className='subhead'> USEFUL </p>
          <li> 
          <img src={stats} alt=""  className='icon' />
            <span> Stats</span> </li>
          <li> 
          <img src={notification} alt=""  className='icon' />
            <span> Notification</span> </li>

            

               <p className='subhead'> SERVICES </p>
          <li> 
          <img src={system} alt=""  className='icon' />
            <span> System Health</span> </li>
          <li> 
          <img src={logs} alt=""  className='icon' />
            <span> Logs</span> </li>
          <li> 
          <img src={setting} alt=""  className='icon' />
            <span> Settings </span> </li>

           

            <p className='subhead'> USER </p>
          <li> 
          <img src={profile} alt=""  className='icon' />
            <span> Profile </span> </li>
          <li> 
          <img src={logout} alt=""  className='icon' />
            <span> Logout</span> </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color"></div>
        <div className="color"></div>
      </div>
    </div>
  )
}

export default SideBar