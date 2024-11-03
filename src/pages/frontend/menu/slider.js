import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import Slider from "react-slick";
import './menu.scss'
import { ProductsContext } from "../../../context/ProductContext";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={`${className} custom-arrow custom-prev-arrow  d-flex justify-content-center align-items-center top-50 translate-middle-y`}
      style={{ ...style,width: "auto", height: "25px",right:"-20px" }}
        onClick={onClick}
      >
      <RightOutlined style={{ color: "#00C655", fontSize: "15px",position:"absolute" }} />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
  className={`${className} custom-arrow custom-prev-arrow d-flex justify-content-center align-items-center  top-50 translate-middle-y`}
  style={{ ...style, width: "auto", height: "25px",left:"-20px" }}
  onClick={onClick}
>
  <LeftOutlined  style={{ color: "#00C655", fontSize: "15px",position:"absolute" }} />
</div>

    );
  }
  
  // Slider component
  function MultipleRows() {

    const {menu}=useContext(ProductsContext)
    console.log("menu",menu);

    const settings = {
    //   centerMode: true,
      infinite: true,
      slidesToShow: 10,
      speed: 500,
      slidesPerRow: 1,
      
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            // slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <div className=" mt-1 slider-container col-11 ">
      <Slider {...settings}>
        { menu.map((item,i) => (
          <div key={i}  className=" rounded  menu  overflow-hidden " style={{boxShadow:" rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}}>
            <div className="text-Center" style={{backgroundColor:"#ffff"}}><img className="border rounded-pill" style={{height:"60px",width:"60px"}} src={item.pick} alt={item.name} /></div>
            <div className="text-Center" style={{backgroundColor:"#ffff"}}>{item.name}</div>
           </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleRows;
