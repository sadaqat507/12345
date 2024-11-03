import React, { useContext, useEffect, useState } from "react";
import { Carousel, Button } from "antd";
import img1 from "../../../assets/images/slide1.png";
import img2 from "../../../assets/images/slide2.png";
import img3 from "../../../assets/images/slide3.png";
import img4 from "../../../assets/images/slide4.png";
import offer1 from "../../../assets/images/offer1.webp";
import { Context } from "../../../context/Appcontext";
import Offers from "../../../components/Offers";

const Slider = () => {
  const contentStyle = {
    maxHeight: "20em",
    width: "100%",
    color: "#fff",
    textAlign: "center",
  };

  const imageStyle = {
     
    backgroundPosition: "right center",  
    backgroundRepeat: "no-repeat",
    backgroundSize: "25em",
    height: "20em",

  };

   

  const { offer } = useContext(Context);
  const offers= useState(offer);
  let passtime = offers > 0 ? offers.toString().padStart(2, "0") : "00";
   

  const [seconds, setSeconds] = useState(60);   
  const [minutes, setMinutes] = useState(60);    
  const [hours, setHours] = useState(24);        
  const [days, setDays] = useState(offer);         

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);  
      } else if (seconds === 0) {
        if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);   
          setSeconds(59);   
        } else if (minutes === 0 && hours > 0) {
          setHours((prevHours) => prevHours - 1);   
          setMinutes(59);   
          setSeconds(59);   
        } else if (hours === 0 && days > 0) {
          setDays((prevDays) => prevDays - 1);   
          setHours(23);   
          setMinutes(59);   
          setSeconds(59);   
        }
      }
    }, 1000);

    return () => clearInterval(timer);   
  }, [seconds, minutes, hours, days]);



  return (
    <>
       <div className="row mx-md-4">
        <div
          className="col-md-7 col-sm-12 py-2 p-md-0 ml-md-4 mt-md-2 rounded p-2"
          style={{
            overflow: "hidden",
          }}
        >
          <Carousel
            dots={false}
            autoplay
            className="rounded "
            style={{
              height: "20em",
              overflow: "hidden",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
          >
            <div style={contentStyle} className="">
              <div
                style={{
                  
                  ...imageStyle,
                  backgroundImage: `url(${img1})`,
                  backgroundColor: "#F5F3F3",
                }}
                className="  p-md-3    "
              >
                <div className="text mt-md-4 m-1  " style={{ width: "70%" }}>
                  <h2>
                     
                    The Best Quality Product <br /> Guaranteed!1
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    est voluptatibus neque velit animi sequi.
                  </p>
                  <Button type="primary">Click Here</Button>
                </div>
              </div>
            </div>
            <div style={contentStyle}>
              <div
                style={{
                  ...imageStyle,
                  backgroundImage: `url(${img2})`,
                  backgroundColor: "#FFEDD5",
                }}
                className="  p-md-3"
              >
                <div className="text mt-md-4 m-1    " style={{ width: "70%" }}>
                  <h2>
                     
                    The Best Quality Product <br /> Guaranteed!2
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    est voluptatibus neque velit animi sequi.
                  </p>
                  <Button type="primary">Click Here</Button>
                </div>
              </div>
            </div>
            <div style={contentStyle}>
              <div
                style={{
                  ...imageStyle,
                  backgroundImage: `url(${img3})`,
                  backgroundColor: "#F1F1F1",
                }}
                className=" p-md-3"
              >
                <div className="text mt-md-4 m-1    " style={{ width: "70%" }}>
                  <h2>
                     
                    The Best Quality Product <br /> Guaranteed!3
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    est voluptatibus neque velit animi sequi.
                  </p>
                  <Button type="primary">Click Here</Button>
                </div>
              </div>
            </div>
            <div style={contentStyle}>
              <div
                style={{
                  ...imageStyle,
                  backgroundImage: `url(${img4})`,
                  backgroundColor: "#F7F7F7",
                }}
                className="  p-md-3"
              >
                <div className="text mt-md-4 m-1    " style={{ width: "70%" }}>
                  <h2>
                     
                    The Best Quality Product <br /> Guaranteed!4
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    est voluptatibus neque velit animi sequi.
                  </p>
                  <Button type="primary">Click Here</Button>
                </div>
              </div>
            </div>
          </Carousel>
          
        </div>
        <div
          className="col-md-5 col-sm-12  my-md-2 rounded "
          id="borderchange"
          style={{ overflow: "hidden" }}
        >
          <div
            className="header_discount py-1 text-center col-md-12 "
            style={{ backgroundColor: "#FFEDD5" }}
          >
            Latest Super Discount Active Coupon Code
          </div>
          <div className="Offers m-md-2   d-flex justify-content-around flex-column">
             <Offers offerimg={offer1} discount='20%'  status={seconds||minutes||hours||days  ? 'active':"inactive"}  seasonname='summer24' price='500$' passDay={days+5} passHour={hours.toString().padStart(2, '0')} passMinint={minutes} passSecond= {seconds} passtime={passtime} offers={offers}/>
             <Offers offerimg={offer1} discount='30%'  status={seconds||minutes||hours||days ? 'active':"inactive"}  seasonname='summer24' price='600$' passDay={days} passHour={hours.toString().padStart(2, '0')} passMinint={minutes} passSecond= {seconds} passtime={passtime} offers={offers}/>
          </div>
        </div>
         
      </div>
    
    </>
   );
};

export default Slider;

