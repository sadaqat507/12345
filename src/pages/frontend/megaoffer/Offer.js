import React, { useContext, useEffect, useState } from 'react'
import { OfferContext } from '../../../context/OfferContext';

const Offer = () => {
    const { offers } = useContext(OfferContext);
    console.log(offers)
    const formatTime = (time) => {
        return String(time).padStart(2, '0');
      };
       const [time, setTime] = useState({
        days: offers.passDay,
        hours: offers.passHour,
        minutes: offers.passMinint,
        seconds: offers.passSecond,
      });
 
  useEffect(() => {
    const timer = setInterval(() => {
      const { days, hours, minutes, seconds } = time;
      if (seconds > 0) {
        setTime({ ...time, seconds: seconds - 1 });
      } else if (minutes > 0) {
        setTime({ ...time, minutes: minutes - 1, seconds: 59 });
      } else if (hours > 0) {
        setTime({ ...time, hours: hours - 1, minutes: 59, seconds: 59 });
      } else if (days > 0) {
        setTime({ ...time, days: days - 1, hours: 23, minutes: 59, seconds: 59 });
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [time]);
  

  return (
    <div className='row'>
        <div className="col-md-6 col-12">
        <div className="maxoff text-between m-md-4 p-md-4 m-1 rounded" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
      <div className="child text-center d-md-flex d-none" style={{ height: "6em" }}>
        <img
          src={offers.offerimg}
          alt="offer"
          className="rounded"
          style={{ width: "80%", height: "90%" }}
        />
      </div>

      <div className="child px-2 w-sm-100 p-1">
        <div className="time">
          <div className="zero text-between">
            <div className="first px-2 py-1 rounded text-light m-1" style={{ backgroundColor: "#EF4444" }}>
              {formatTime(time.days)}
            </div>
            :
            <div className="first px-2 py-1 rounded text-light m-1" style={{ backgroundColor: "#EF4444" }}>
              {formatTime(time.hours)}
            </div>
            :
            <div className="first px-2 py-1 rounded text-light m-1" style={{ backgroundColor: "#EF4444" }}>
              {formatTime(time.minutes)}
            </div>
            :
            <div className="first px-2 py-1 rounded text-light m-1" style={{ backgroundColor: "#EF4444" }}>
              {formatTime(time.seconds)}
            </div>
          </div>
        </div>
        <div className="text">Lorem ipsum dolor sit amet.</div>

        <div className="pb-0 mb-0 text-between" style={{ width: "80%" }}>
        
          <span style={{ color: "#EF4444", fontSize: "20px" }}>{offers.discount}</span>
          off
          <button
            type="button"
            className="text-center rounded-pill px-3"
            style={{
              backgroundColor: offers.status === "active" ? "green" : "#FEE2E2",
              color: offers.status === "active" ? "white" : "black",
              border: "none",
              outline: "none",
            }}
          >
            {offers.status === "active" ? "active" : "inactive"}
          </button>
        </div>

        
      </div>

      <div className="child px-1 pt-1 d-md-block d-none" style={{ width: "30%", height: "auto", fontSize: "12px", borderLeft: "2px dashed #E5E7EB" }}>
        <div className="id rounded text-center py-2" style={{ backgroundColor: "#ECFDF5", border: "1px dashed #87F18B" }}>
          {offers.seasonname}
        </div>
        <p className="detail" style={{ color: "#6B7290" }}>
          * This coupon applies when shopping more than <span style={{ fontWeight: "bold" }}>{offers.price}</span>
        </p>
      </div>
    </div>

        </div>
      
    </div>
  )
}

export default Offer
