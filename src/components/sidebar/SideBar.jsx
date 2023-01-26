import React from 'react'

import "./sidebar.scss"

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        
          <span  className="logo" >
            Yube
          </span>
        
      </div>
      <div className="center">
        <ul>
          <li> <span> Dashboard</span> </li>
          <li> <span> Dashboard</span> </li>
          <li> <span> Dashboard</span> </li>
          <li> <span> Dashboard</span> </li>
        </ul>
      </div>
      <div className="bottom">
        color option
      </div>
    </div>
  )
}

export default SideBar