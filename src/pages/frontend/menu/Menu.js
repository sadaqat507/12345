import React from "react";
import meat from "../../../assets/search/meat.png";
import fruit from "../../../assets/search/fruits.png";
import vegitable from "../../../assets/search/vegitable.png";
import './slider'
import './menu.scss'
 import MultipleRows from "./slider";
import Searchmenu from "./Searchmenu";
    const Menu = () => {




  
  return (
    <div className="container-fluid mt-md-4 mt-0 " style={{backgroundColor:"#F9FAFB"}}>
      <div className="row mx-md-4 m-2 text-Center">
      <div className="  col-lg-4 mb-md-4 col-md-6 col-11      ">
        <div
            className="img   rounded   m-1 text-Center text-light flex-column"
            style={{
              backgroundImage: `url(${vegitable})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "180px",
              backgroundColor: "#FF8072",
            }}
          >
            <h4 >All Types of Vegitable</h4>
            <p className="fw-bold ">Weakend discound Offer</p>
            <button className="btn bg-success rounded-pill text-light my-2">Shop Now</button>
  
            </div>   
                             </div>
        
        <div className="  col-lg-4 mb-md-4 col-md-6 col-11     ">
        <div
            className="img   rounded   m-1 text-Center text-light flex-column"
            style={{
              backgroundImage: `url(${fruit})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "180px",
              backgroundColor: "#018196",
            }}
          >
            <h4 >All Types of Fruits</h4>
            <p className="fw-bold ">Weakend discound Offer</p>
            <button className="btn bg-success rounded-pill text-light my-2">Shop Now</button>
  
            </div>        </div>
           <div className=" col-lg-4 mb-md-4 col-md-6 col-11  ">
          <div
            className="img   rounded   m-1 text-Center text-light flex-column"
            style={{
              backgroundImage: `url(${meat})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "180px",
              backgroundColor: "#19A881",
            }}
          >
           <h4 >All Types of Meat</h4>
            <p className="fw-bold ">Weakend discound Offer</p>
            <button className="btn bg-success rounded-pill text-light my-2">Shop Now</button>
  

          </div>
        </div>
       
      </div>
      <div className="row text-Center overflow-hidden   ">
        <MultipleRows/>
      </div>
      <div className="row text-Center overflow-hidden">
        <Searchmenu />
      </div>
    </div>
  );
};

export default Menu;
