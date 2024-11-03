 import appconection from "../../../assets/images/appconection.webp";
import "./home.scss";
import Image from "../../../components/imgs/Image";
import { MedicineBoxOutlined, RightOutlined } from "@ant-design/icons";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { useContext, useState } from "react";
import { ProductsContext } from "../../../context/ProductContext";
import { useCounter } from "../../../context/CounterContext";
import SidebarHome from "./Sidebar";
import Slider from "./Slider";
import { Modal, Typography } from "antd";

const Home = () => {
  const { products, menu } = useContext(ProductsContext);

  const { state, dispatch } = useCounter();
  const handleCounter = (operation, productId, e) => {
    e.preventDefault(); // Prevent default behavior
    dispatch({ type: operation, productId });
  };

  const arrow = <RightOutlined />;

  const { Text } = Typography;

   

  const [visible, setVisible] = useState(false);

  const handlePreviewClick = (id) => {
      setVisible(true);
    //  console.log(typeof id);
     
};
  return (
    <>
      <div className="container-fluid ">
        <Slider />
        <SidebarHome />
        <div
          className="row mx-4    d-inline-block position-fixed  rounded-pill"
          style={{ backgroundColor: "#13B981" }}
        >
          <div
            className="col  text-Center"
            style={{ height: "60px", width: "60px", zIndex: "10000" }}
          >
            AB
          </div>
        </div>
        <div
          className="row  rounded d-md-flex border   m-md-4 m-sm-1 p-md-3 p-sm-1  "
          style={{ backgroundColor: "#FFEDD5" }}
        >
          <div className=" col  w-100    ">
            <h5 style={{ color: "#3e8e41", fontWeight: "bolder" }}>
              100% Natural Quality Organic Product
            </h5>
            <span className="text-center">
              See Our latest discounted products from here and get a special
              discount product
            </span>
          </div>
          <div className="  col-12 col-md-3   text-Center ">
            <button
              type="button"
              style={{ backgroundColor: "#3e8e41", color: "#ffffff" }}
              className="btn  rounded-pill fs-6 px-4"
            >
              Show Now
            </button>
          </div>
        </div>
        <div
          className="row   text-Center  p-md-4"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          <div
            className="col-12 text-Center flex-column   enter  "
            style={{ height: "10em" }}
          >
            <h5>Featured Categories</h5>
            <p>Choose your necessary products from this feature categories.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <Modal
                              visible={visible}
                              footer={null}
                              onCancel={() => setVisible(false)}
                            >
                              {/* <Image
          className="w-100 h-50"
            src={product.pickUrl}
            alt={product.name}
            style={{ width: '100%',height:"50vh" }} // Full width in modal
          /> */}
                              <div className="h-100">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Distinctio sequi neque, commodi
                                eligendi non facere possimus deleniti assumenda
                                similique minima!
                              </div>
                            </Modal>
          </div>
        </div>
        <div className="row   p-md-4" style={{ backgroundColor: "#F3F4F6" }}>
          {
            //Categories
            menu.map((item, i) => {
              return (
                <Image
                  src={item.pick}
                  alt={item.name}
                  name={item.name}
                  key={i}
                  first={
                    item.text && item.text[0] ? (
                      <>
                        {arrow} {item.text[0]}
                      </>
                    ) : (
                      ""
                    )
                  }
                  second={
                    item.text && item.text[1] ? (
                      <>
                        {arrow} {item.text[1]}
                      </>
                    ) : (
                      ""
                    )
                  }
                  third={
                    item.text && item.text[2] ? (
                      <>
                        {arrow} {item.text[2]}
                      </>
                    ) : (
                      ""
                    )
                  }
                />
              );
            })
          }
        </div>
        <div className="row   ">
          <div className="col text-center text-Center  pt-md-3 mb-md-4 m-2 pb-md-4 pt-md-2 p-1 ">
            <div className="text-Center flex-column" style={{ width: "100%" }}>
              <span className="h4 d-block">
                Popular Products for Daily Shopping
              </span>
              <div className="  w-75    ">
                See all our popular products in this week. You can choose your
                daily needs products from this list and get some special offer
                with free shipping.
              </div>
            </div>
          </div>
        </div>
        <div className="row  text-Center ">
            {products && products.length > 0 ? (
              products
                .filter((product) => product.status === "true")
                .map((product) => {
                  const counter = state.productCounters[product.id] || 0; // Fixed counter retrieval
                  // console.log(product.id);

                  return (
                    <div
                      className="col-10 col-md-5 col-lg-3 col-xl-2  m-2 rounded"
                      style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
                      key={product.id}
                    >
                      <div className="section1">
                        <span
                          className="rounded-pill  px-2"
                          style={{ backgroundColor: "#D8DADB" }}
                        >
                          <span className="greentext">Stock :</span>
                          <span style={{ color: "#C2410C" }}>
                            {product.stock}
                          </span>
                        </span>
                      </div>

                      <div
                        className="section2 text-center object-fit-cover"
                        style={{ height: "150px" }}
                      >
                        <img
                          src={product.pickUrl}
                          alt={product.id}
                          className="papular object-fit-cover h-100"
                          onClick={()=>handlePreviewClick(product.id)}
                        />
                        
                      </div>

                      <div className="section3 px-2">{product.name}</div>

                      <div className="section4 mb-3 px-2 d-flex justify-content-between">
                        <div className="price fw-bold">₹{product.price}</div>

                        <div
                          className="chart border rounded px-1 text-between "
                          style={{ color: "#D3D3D3" }}
                        >
                          <span
                            className="text-Center  "
                            onClick={(e) => handleCounter("add", product.id, e)}
                            style={{ cursor: "pointer" }}
                          >
                            <IoIosAddCircleOutline size={17} />
                          </span>

                          <span className="px-1   text-Center">
                            {counter > 0 ? (
                              counter <= 9 ? (
                                `0${counter}`
                              ) : (
                                counter
                              )
                            ) : (
                              <MedicineBoxOutlined className="boxicon " />
                            )}
                          </span>

                          <span
                            className="text-Center  "
                            onClick={(e) => handleCounter("sub", product.id, e)}
                            style={{ cursor: "pointer" }}
                          >
                            <GrSubtractCircle size={16} fontWeight={3} />
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  );
                })
            ) : (
              <div className="text-center">No products available</div> // Friendly message when no products exist
            )}
        </div>

        <div className="row py-md-4">
          <div className="col m-4 py-md-4 p-2  rounded  greenbg">
            <div className="connection d-flex rounded p-md-4 mx-md-4 mx-1 border bg-light">
              <div className="content p-2 p-md-3">
                <p className="h5">Organic Products and Food</p>
                <h3>Quick Delivery to Your Home</h3>
                <p>
                  There are many products you will find in our shop, Choose your
                  daily necessary product from our KachaBazar shop and get some
                  special offers. See Our latest discounted products from here
                  and get a special discount.
                </p>

                <button className="btn rounded-pill text-light greenbg">
                  Downloard app
                </button>
              </div>
              <div className="appcontection w-100 text-end d-none d-md-flex">
                <img
                  src={appconection}
                  alt="appconection"
                  style={{ height: "120px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row   ">
          <div className="col text-center text-Center  pt-md-3 mb-md-4  pb-md-4 pt-md-2 p-1 ">
            <p style={{ width: "450px" }}>
              <span className="h4 d-block">Latest Discounted Products</span>
              <span>
                See Our latest discounted products below. Choose your daily
                needs from here and get a special discount with free shipping.
              </span>
            </p>
          </div>
        </div>

        <div className="row  text-Center ">
          {products
            .filter(
              (product) => product.status === "true" && product.offerPercentage
            )
            .map((product) => {
              const counter = state.productCounters[product.id] || 0; // Fixed counter retrieval
              const finalPrice =
                product.price - product.price * (product.offerPercentage / 100);

              return (
                <div
                  className="col-12 col-md-6 col-lg-3 col-xl-2 m-md-2 m-1 rounded  "
                  style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
                >
                  <div className="section1 text-between">
                    <span
                      className="rounded-pill  px-2 "
                      style={{ backgroundColor: "#D8DADB" }}
                    >
                      <span className="greentext">Stock :</span>
                      <span style={{ color: "#C2410C" }}>{product.stock}</span>
                    </span>
                    <span
                      className="px-2 rounded"
                      style={{ color: "#ffffff", backgroundColor: "#F97316" }}
                    >
                      {product.offerPercentage} % 0ff
                    </span>
                  </div>
                  <div
                    className="section2 text-Center border"
                    style={{ height: "170px" }}
                  >
                    <img
                      src={product.pickUrl}
                      alt={product.id}
                      className="papular object-fit-cover h-100"
                    />
                  </div>
                  <div className="section3 px-2">{product.name}</div>
                  <div className="section4 mb-3 px-2 d-flex justify-content-between">
                    <div className="price fw-bold">
                      ₹ <Text delete>{product.price}</Text>/{finalPrice}
                    </div>
                    <div
                      className="chart border rounded px-1 text-between "
                      style={{ color: "#D3D3D3" }}
                    >
                      <span
                        className="text-Center  "
                        onClick={(e) => handleCounter("add", product.id, e)}
                        style={{ cursor: "pointer" }}
                      >
                        <IoIosAddCircleOutline size={17} />
                      </span>

                      <span className="px-1 border  text-Center">
                        {counter > 0 ? (
                          counter <= 9 ? (
                            `0${counter + 1}`
                          ) : (
                            counter + 1
                          )
                        ) : (
                          <MedicineBoxOutlined className="boxicon " />
                        )}
                      </span>

                      <span
                        className="text-Center  "
                        onClick={(e) => handleCounter("sub", product.id, e)}
                        style={{ cursor: "pointer" }}
                      >
                        <GrSubtractCircle size={16} fontWeight={3} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
