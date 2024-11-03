import React, { useContext, useState } from "react";
import { useCounter } from "../../../context/CounterContext";
import { ProductsContext } from "../../../context/ProductContext";
import { Button, Form, Image, Input, Modal } from "antd";
import { MedicineBoxOutlined } from "@ant-design/icons";
import { GrSubtractCircle } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import Blanck404 from "../../Blanck404";
 
const Cart = () => {
  const { state, dispatch } = useCounter();
  const { products } = useContext(ProductsContext);
  console.log("state", state.productOrder);
  console.log("dispatch", dispatch);
  console.log("products", products);
  const handleCounter = (operation, productId, e) => {
    e.preventDefault(); // Prevent default behavior
    dispatch({ type: operation, productId });
  };

  const [visible, setVisible] = useState(false);
  const [order,setOrder]=useState(false)
  const handlePreviewClick = () => {
    setVisible(true); // Show the image in a modal on click
  };

  const handleOrder=()=>{
    setOrder(true)
  }

   const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    address: "",
    id: "",
  });

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value, // Update the specific input field
    }));
  };

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Form submitted: ", formValues);
    // You can now send formValues to your API or do other processing
  };

  return (
    <div className="container-fluid">
      <div className="row text-Center">
        {state.productOrder && state.productOrder.length > 0
          ? state.productOrder.map((orderItem) => {
              const counter = orderItem.currentCount || 0;

              return products
                .filter((product) => product.id === orderItem.productId)
                .map((product, i) => (
                  <div
                    className="col-xl-3 col-lg-4 col-md-5 col-sm-9 col-10 border"
                    key={i}
                  >
                    <div className="m-2 border">
                      <div
                        className="imgbox border d-flex"
                        style={{
                          height: "auto",
                          width: "100%",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div
                          className="w-50 border"
                          style={{ height: "100px" }}
                        >
                          <Image
                            width={100}
                            height={100}
                            preview={false} // Disable default preview and hover effect (eye icon)
                            onClick={handlePreviewClick}
                            src={product.pickUrl}
                          />
                          <Modal
                            visible={visible}
                            footer={null}
                            onCancel={() => setVisible(false)}
                          >
                            <Image
        className="w-100 h-50"
          src={product.pickUrl}
          alt={product.name}
          style={{ width: '100%',height:"50vh" }} // Full width in modal
        />
                             
                          </Modal>
                        </div>

                        <p
                          className="p-1 links"
                          style={{
                            fontSize: "13px",
                            wordSpacing: "2px",
                            cursor: "pointer",
                          }}
                        >
                          {product.productDetail.length > 50 ? (
                            <>{product.productDetail.slice(0, 50)}......</>
                          ) : (
                            product.productDetail
                          )}
                        </p>
                      </div>

                      <div className="itemQuantity">
                        <p className="fs-6 text-between p-1 m-0">
                          <span className="fw-bold fs-6 text-success">
                            {product.name}
                          </span>
                          <span>
                            {" "}
                            Quantity{" "}
                            {orderItem.currentCount < 10 ? (
                              <>0{orderItem.currentCount} </>
                            ) : (
                              orderItem.currentCount
                            )}{" "}
                          </span>{" "}
                        </p>

                        <div className="detail border text-Center">
                          <div
                            className="chart border rounded px-2 py-1 text-between "
                            style={{ color: "#D3D3D3" }}
                          >
                            <span
                              className="text-Center  "
                              onClick={(e) =>
                                handleCounter("add", product.id, e)
                              }
                              style={{ cursor: "pointer" }}
                            >
                              <IoIosAddCircleOutline size={20} fontWeight={3} />
                            </span>

                            <span className="px-1 fw-bold  text-Center">
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
                              onClick={(e) =>
                                handleCounter("sub", product.id, e)
                              }
                              style={{ cursor: "pointer" }}
                            >
                              <GrSubtractCircle size={18} />
                            </span>
                          </div>
                        </div>

                        <p className="p-0 m-0 text-between">
                          <span className=""> Price {product.price}</span>
                          <span className="">
                            {" "}
                            Total {product.price * orderItem.currentCount}
                          </span>
                        </p>
                      </div>
                      {/* Display product details */}
                    </div>
                  </div>
                ));
            })
          : <div className="col text-Center"><Blanck404/></div> }

                       
      </div>
      <div className="row border border-success text-Center">
        <div className="col ">
                        <button onClick={handleOrder} type="primary">Order Now</button>
                        <Modal
                            visible={order}
                            footer={null}
                            onCancel={() => setOrder(false)}
                          >
                            <div className="col-9 border">
                            <Form col={15}
      onFinish={handleSubmit} // Ant Design handles form submission here
    >

      <Form.Item>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
        />
      </Form.Item>
      
      <Form.Item>
        <Input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formValues.phone}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item>
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formValues.address}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item>
        <Input
          type="text"
          name="id"
          placeholder="ID"
          value={formValues.id}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
                           </Form>
                             
                            </div>
                            
                        </Modal>
        </div>
      </div>
    </div>
  );
};

export default Cart;
