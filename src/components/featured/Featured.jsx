import React from 'react'
import "./featured.scss"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import dot from "../../assets/dot.png"
import up from "../../assets/up.png"
import down from "../../assets/down.png"


const Featured = () => {
  return (
    <div className='feature'>
      <div className="top">
        <h1 className='title'>
          Total Revenue
        </h1>
        <img src={dot} alt="" className='icon' />
      </div>
      <div className="bottom">
        <div className="charts">
        <CircularProgressbar value={40} text={"40%"} strokeWidth={4}/>
        </div>
        <p className="title"> Total sales today</p>
        <p className="amount">$400</p>
        <p className="desc">
          Previous transaction processing. Last payment maynot be included.
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              Target
            </div>
            <div className="itemResult">
              <img src={up} alt=""  className='icon' />
              <div className="resultAmount positive">
                $345.8
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Last Week 
            </div>
            <div className="itemResult">
              <img src={down} alt=""  className='icon' />
              <div className="resultAmount negative">
                $345.8
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Last Month
            </div>
            <div className="itemResult ">
              <img src={up} alt="" className='icon' />
              <div className="resultAmount positive">
                $345.8
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Featured
