import React from "react";
import shopping1 from "../../assets/images/shopping1.webp";
import shopping2 from "../../assets/images/shopping2.webp";
import Button1 from "../../assets/images/apple.svg";
import Google from "../../assets/images/goolge.svg";
import logo from "../../assets/logos/footerlogo.svg";
import payment from "../../assets/images/payment-logo.png";
import "./footer.scss";
import {
  LinkedinOutlined,
  PinterestOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <div className="footerdetail   d-flex ">
        <div className="left d-none  d-lg-flex">
          <img
            src={shopping1}
            className=""
            style={{ width: "380px" }}
            alt="shopping1"
          />
        </div>
        <div className="midd   text-center p-1 m-1 m-md-2 h-auto">
          <h1>Get Your Daily Needs From Our KachaBazar Store</h1>
          <p className="w-100">
            There are many products you will find in our shop, Choose your daily
            necessary product from our KachaBazar shop and get some special
            offers.
          </p>
          <div className="app_google">
            <img
              src={Button1}
              alt="button1"
              className="m-1"
              style={{ width: "150px" }}
            />
            <img
              src={Google}
              alt="button2"
              className="m-1"
              style={{ width: "150px" }}
            />
          </div>
        </div>
        <div className="right d-none  d-lg-flex">
          <img
            src={shopping2}
            className=""
            style={{ width: "380px" }}
            alt="shopping2"
          />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row    m-1 text-Center">
          <div className=" col-6 col-md-4 col-lg-3 text-Center   ">
            <div className="Links d-inline-block    " style={{}}>
              <p className="fw-bold">Company</p>
              <p className="p-0 m-0">About Us</p>
              <p className="p-0 m-0">Contact Us</p>
              <p className="p-0 m-0">Carrers</p>
              <p className="p-0 m-0">Latest News</p>
            </div>
          </div>
          <div className="col-6 col-md-4 tecx-Center text-Center col-lg-3">
            <div className="Links d-inline-block ">
              <p className="fw-bold">Latest News</p>
              <p className="p-0 m-0">Fish & Meat</p>
              <p className="p-0 m-0">Soft Drink</p>
              <p className="p-0 m-0">Milk & Dairy</p>
              <p className="p-0 m-0">Beauty & Health</p>
            </div>
          </div>
          <div className="col-6 col-md-4 tecx-Center text-Center col-lg-3">
            <div className="Links d-inline-block ">
              <p className="fw-bold">My Account</p>
              <p className="p-0 m-0">Dashboard</p>
              <p className="p-0 m-0">My Orders</p>
              <p className="p-0 m-0">Recent Orders</p>
              <p className="p-0 m-0">Update Profile</p>
            </div>
          </div>
          <div className="col-6 col-md-4 tecx-Center text-Center col-lg-3">
            <div className="Links d-inline-block ">
              <p>
                <img src={logo} alt="logo" style={{ width: "100px" }} />
                
              </p>
              <p className="p-0 m-0">
                987 Abndreed Plain Auite Higher Street 838
              </p>
              <p className="p-0 m-0">Aedteredtown, USA</p>
              <p className="p-0 m-0">Tel : 02.356.1666567</p>
              <p className="p-0 m-0">Email : Dccrauidk@test.com</p>
            </div>
          </div>
          <div className="col-12"></div>
        </div>
        <div className="row accounts     text-Center p-lg-4 mx-lg-4">
          <div className="col-md-4 col-12">
            <p>Follow Us</p>
            <div className="icons d-flex">
              <span
                className="icon-container m-1 p-2  "
                style={{ backgroundColor: "#3B5998", borderRadius: "50%" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#ffffff"
                    d="M29,3c-5.523,0-10,4.477-10,10v5h-6v8h6v19h8V26h7l1-8h-8v-4c0-2.209,1.791-4,4-4h4V3.322 C33.091,3.125,30.921,2.996,29,3L29,3z"
                  ></path>
                </svg>
              </span>

              <span
                className="icon-container m-1 p-2  "
                style={{ backgroundColor: "#00ACED", borderRadius: "50%" }}
              >
                <TwitterOutlined style={{ fontSize: "20px", color: "white" }} />
              </span>

              <span
                className="icon-container m-1 p-2  "
                style={{ backgroundColor: "#CB2128", borderRadius: "50%" }}
              >
                <PinterestOutlined
                  style={{ fontSize: "20px", color: "white" }}
                />
              </span>

              <span
                className="icon-container m-1 p-2  "
                style={{ backgroundColor: "#007FB1", borderRadius: "50%" }}
              >
                <LinkedinOutlined
                  style={{ fontSize: "20px", color: "white" }}
                />
              </span>

              <span
                className="icon-container m-1 p-2  "
                style={{ backgroundColor: "#25D366", borderRadius: "50%" }}
              >
                <WhatsAppOutlined
                  style={{ fontSize: "20px", color: "white" }}
                />
              </span>
            </div>
          </div>
          <div className="col-md-4 col-12 d-none d-lg-block ">
            <h2>Call Us Today!</h2>
            <span>+659884546766</span>
          </div>
          <div className="col-md-4 col-12    text-Center d-none d-lg-flex ">
            <img src={payment} alt="payment" style={{ width: "70%" }} />
          </div>
        </div>
      </div>
          


      <p className="py-3 my-0    text-center" style={{ color: "#798188" }}>

        Copyright {year} @ <span style={{ color: "#10b981" }}>NextGood</span>,
        All rights reserved.
      </p>
    </>
  );
};

export default Footer;
