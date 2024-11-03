import React, { useContext, useState } from "react";
import { useCounter } from "../../../context/CounterContext";
import { ProductsContext } from "../../../context/ProductContext";
import { Button, Form, Image, Input, message, Modal } from "antd";
import { MedicineBoxOutlined } from "@ant-design/icons";
import { GrSubtractCircle } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./cart.scss"
import Blanck404 from "../../Blanck404";
import {  doc, setDoc } from "firebase/firestore";
import { firestore } from "../../../config/firestore";
import { Context } from "../../../context/Appcontext";
 
const Cart = () => {
  const { state, dispatch } = useCounter();
  const { products } = useContext(ProductsContext);
  const {userUid,isProcessing,setIsProcessing}=useContext(Context)
  // const [previousOrder,setPreviousOrder]=useState()
  // console.log("state", state.productOrder);
  // console.log("dispatch", dispatch);
  // console.log("products", products);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(firestore, "UserOrder"));
        // Map through the documents to extract data
  //       const orders = querySnapshot.docs.map((doc) => ({
  //         id: doc.id, // Each document has an ID
  //         ...doc.data(), // Spread the rest of the document data
  //       }));
  //       setPreviousOrder(orders); 
        
  //       previousOrder.forEach((order) => {
  //         // Assuming 'order' structure is: { order: { [userUid]: [orderFinalize, {status: "false"}] }}
  //         if (order.order && order.order[userUid]) {
  //           // Get the order and status
  //           const userOrder = order.order[userUid];
  //           const orderFinalize = userOrder[0]; // Assuming the first element is the finalized order
  //           const orderStatus = userOrder[1]; // Assuming second element contains {status: "false"}
  //            const [item1,setItems]=useState()
  //           orderStatus.map((item,i)=>{
  //             setItems(item)
  //           })
            

  //           console.log(`Order Finalize: ${orderFinalize}`);
  //           console.log(`Order Status: ${orderStatus}`);
  //         } else {
  //           console.log("User not found in this order.");
  //         }
  //       });


  //     } catch (error) {
  //       console.error("Error fetching documents: ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // Log the fetched data
  // useEffect(() => {
  //   console.log("previousOrder", previousOrder[0].id===userUid);
  //   if(previousOrder.order.userUid===userUid){
  //     console.log(previousOrder.order.userUid);
  //   }else{
  //     console.log("user not login");
  //   }
  // }, [previousOrder]);

  // console.log("previousOrder",previousOrder);


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
console.log(state.productOrder
);
  // Handle form submission
  const handleSubmit = async() => {

if(formValues.address.length>5 && formValues.id.length>5 && formValues.phone.length>5){
  const orderFinalize={
    location:formValues,
    product_Order:state
    }
    try {

      const id=Math.random().toString(36).slice(2)
      const orderDetail={ id:id,userUid:userUid,location:formValues,order:state.productOrder,status:"inactive"}
      console.log(orderDetail);
      if(userUid){
        await setDoc(doc(firestore, "UserOrder",  id), orderDetail );
        message.success("Order is done successfully!");
        setFormValues("");
        console.log("Form submitted: ", orderFinalize);
        setIsProcessing(true);
        setOrder(false)
      }else{
        message.info("Please you can Login!");
        navigator("/auth/login")
      }
      
      
    
    

    } catch (error) {
      message.error("Order is not done Please try again!");

    } 
}else{
  message.info("Please file box according to requirement!");
}

    
     
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
                    className="col-xl-3 col-lg-4 col-md-5 col-sm-9 col-10 "
                    key={i}
                  >
                    <div className="m-1 p-2 border rounded selected" >
                      <div
                        className="imgbox   d-flex"
                        style={{
                          height: "auto",
                          width: "100%",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div
                          className="w-50  "
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
                          {product.productDetail.length < 100 ? (
                            <>{product.productDetail.slice(0, 100)}......</>
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

                        <div className="detail  text-Center">
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
        
        <div className="row  text-Center">
          {state.productOrder ? <div className="col-10  buttonOrder rounded-pill text-Center ">
          <button className="btn  rounded-pill " onClick={handleOrder}  >Order Now</button></div>:""}
        
        </div>

      <div className="row border border-success text-Center">
                     
        <div className="col d-flex justify-content-center align-items-center border  ">
                        <Modal
                            visible={order}
                            footer={null}
                            onCancel={() => setOrder(false)}
                           >
                            <div className="w-75">
                            <Form col={20}
      onFinish={handleSubmit} // Ant Design handles form submission here
    >

      <Form.Item>
        <Input
          type="text"
          name="name"
          placeholder="Name Atleast 5 character"
          value={formValues.name}
          onChange={handleChange}
        />
      </Form.Item>
      
      <Form.Item>
        <Input
          type="text"
          name="phone"
          placeholder="Phone Atleast 5 number ..."
          value={formValues.phone}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item>
        <Input
          type="text"
          name="address"
          placeholder="Address Atleast 5 number ..."
          value={formValues.address}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item>
        <Input
          type="text"
          name="id"
          placeholder="Id Atleast 5 number ..."
          value={formValues.id}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" loading={isProcessing} htmlType="submit" 
 >
          Submit
        </Button>
      </Form.Item>
                           </Form>
                             
                            </div>
                            
                        </Modal>
        </div>
      </div>
      <div className="row">
        <div className="col">Order history</div>
      </div>
    </div>
  );
};

export default Cart;
