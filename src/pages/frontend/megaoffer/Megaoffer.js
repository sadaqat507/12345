import React from "react";
import ContactImg_1 from "../../../assets/images/fish.webp";
import ContactImg_2 from "../../../assets/images/slide3.png";
import Offer from "./Offer";
 // import Offers from "./Offer";
const Megaoffer = () => {
  return (

    <div className="container-fluid">
      <div className="row d-flex" style={{ backgroundColor: "#EEF2FF" }}>
        <div
          className="col-md-6 col-lg-4 col-12 "
          style={{backgroundImage: `url(${ContactImg_1})`,backgroundSize: "8em",backgroundRepeat: "no-repeat",height: "10em",backgroundPositionY: "center",
          }}
        ></div>
        <div className="col-md-6 col-lg-4 col-12 text-Center">
          <h2>Mega Offer</h2>
        </div>
        <div
          className="col-md-6 col-lg-4 col-12"
          style={{backgroundImage: `url(${ContactImg_2})`,backgroundPosition: "right",backgroundSize: "10em",backgroundRepeat: "no-repeat",height: "10em",backgroundPositionY: "center",
          }}
        ></div>
      </div>
       <Offer/>
    </div>

  );
};

export default Megaoffer;
