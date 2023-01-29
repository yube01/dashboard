import React from 'react'
import "./widget.scss"
import User from "../../assets/user.png"
//import Down from "../../assets/down.png"
import up from "../../assets/up.png"
import Cart from "../../assets/order.png"
import Wallet from "../../assets/wallet.png"
import Dollor from "../../assets/dollor.png"
const Widget = ({type}) => {



    const amount =1000
    const diff = 34

    let data;

    switch (type){
        case "user":
            data = {
                title : "USERS",
                isMOney: false,
                link: "See all users",
                icon: <img src={User} className='icon'/>
                 };
                 break
        case "order":
            data = {
                title : "ORDER",
                isMOney: false,
                link: "View all orders",
                icon: <img src={Cart} className='icon'  
                style={{
                    backgroundColor: "rgba(128, 0, 17, 0.374)"
                }}
                />
                 };
                 break
        case "earning":
            data = {
                title : "EARNING",
                isMOney: true,
                link: "View net earning",
                icon: <img src={Dollor} className='icon'
                style={{
                    backgroundColor: "rgba(86, 203, 63, 0.374)"
                }}
                />
                 };
                 break
        case "balance":
            data = {
                title : "BALANCE",
                isMOney: true,
                link: "See details",
                icon: <img src={Wallet} className='icon'
                style={{
                    backgroundColor: "rgba(0, 11, 128, 0.374)"
                }}
                />
                 };
                 break
        default:
            break
    }




  return (
    <div className="widget">
        <div className="left">
            <span className='title'> {data.title} </span>
            <span className='counter' > {data.isMOney && "$"} {amount} </span>
            <span className='link' > {data.link} </span>
        </div>
        <div className="right">
            <div className="percent positive">
                <img src={up} alt=""  className='icons'/>
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget