import {  DeleteOutlined, ShoppingOutlined } from "@ant-design/icons";
import React, { useContext} from "react";
import { Context } from "../../../context/Appcontext";
import { useCounter } from "../../../context/CounterContext";
import { ProductsContext } from "../../../context/ProductContext";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { Empty } from "antd";
import { Link } from "react-router-dom";

const SidebarHome = () => {
  const { sidebar, setSidebar, userUid } = useContext(Context);
  const { state, dispatch } = useCounter();
  const { products } = useContext(ProductsContext);
  const productsIds = [userUid];
   for (let i = 0; i < state.productOrder.length; i++) {
    let order = state.productOrder[i].productId;
    let count = state.productOrder[i].currentCount;

    // Push an object with both productId and currentCount
    productsIds.push({
      productId: order,
      counter: count,
    });
    
  }

  const handleCounter = (operation, productId, e) => {
    e.preventDefault(); // Prevent default behavior
    dispatch({ type: operation, productId });
    // console.log(totalPrice)

  };

  const totalPrice = state.productOrder.reduce((acc, orderItem) => {
    const product = products.find(p => p.id === orderItem.productId);
    // console.log( "acc",acc)
    // console.log( "orderItem",orderItem)
    // console.log("product",product)
    return acc + (product 
      ? product.offerPercentage 
        ? (product.price - (product.price * (product.offerPercentage / 100))) * orderItem.currentCount 
        : product.price * orderItem.currentCount 
      : 0);
      }, 0);

  //  console.log("state.totalCount",state.totalCount)


  console.log("totalPrice",totalPrice);

  console.log(products);
  return (
    <>
      <div
        className="row d-none border rounded  d-md-block position-fixed overflow-hidden"
        style={{
          height: "80px",
          width: "90px",
          zIndex: "10000",
          right: "0",
          top: "40%",
        }}
      >
        <button
          className="border-0 outline-none"
          onClick={() => setSidebar(!sidebar)}
        >
          <div
            className="col text-Center flex-column border"
            style={{ height: "70%", backgroundColor: "#EEF2FF" }}
          >
            <p
              className="p-0 m-0 text-Center"
              style={{ padding: "20px", width: "40px", height: "30px" }}
            >
              <ShoppingOutlined
                className="greentext"
                style={{ fontSize: "24px" }}
              />
            </p>
            <p className="text-center m-0"> {state.totalCount === 0
              ? `0:00`
              : state.totalCount < 10
              ? `$:0${state.totalCount}`
              : state.totalCount} items</p>
          </div>
          <div
            className="col d-flex justify-content-center align-items-center text-light greenbg"
            style={{ height: "30%" }}
          >
               ${totalPrice?totalPrice.toFixed(2):0.00} 
               </div>
        </button>
      </div>

      <div
        className={`row position-fixed d-flex   rounded  ${
          sidebar ? "d-block " : "d-none"
        }`}
        style={{
          height: "100vh",
          width: "100vw",
          backgroundSize: "100%",
          zIndex: "10000",
          right: "0",
          top: "0%",
        }}
      >
        <div
          className="col-md-7 col-1"
          style={{}}
          onClick={(e) => {
            e.preventDefault();
            setSidebar(!sidebar);
          }}
        >
          {/* CART */}
        </div>
        <div
          className="col-md-5 col-11   border cart border-green"
          style={{ height: "100%", backgroundColor: "#FFFFFF" }}
        >
          <header
            className="text-between p-2"
            style={{ backgroundColor: "#EEF2FF" }}
          >
            <div>
              <ShoppingOutlined style={{ fontSize: "20px" }} />
              <span className="fw-bolder">Shopping Cart</span>
            </div>
            <button
              type="button"
              className="btn border-0 outline-none"
              onClick={() => setSidebar(!sidebar)}
              style={{ color: "#B3B6BF" }}
            >
              X Close
            </button>
          </header>

          <div
            className=" border m-0"
            style={{ height: "75vh", overflowY: "scroll" }}
          >
              {state.productOrder.length > 0 ? (
  <table className="table table-responsive ">
 
    <tbody className="border-0">
    



      {state.productOrder.map((orderItem, i) => {
        const filteredProducts = products.filter(
          (product) => product.id === orderItem.productId
        );
        return filteredProducts.map((product) => (
          <tr key={product.id}  style={{borderTop:"1px solid #DDDDDD" }}>
            <td className="text-Center border-0 " style={{height:"116px"}}>
              <div className="text-Center "  style={{ width: "60px",height:"60px", borderRadius: "50%",border:"1px solid #DDDDDD" }}
              >
              <img
              
              style={{ width: "90%",height:"90%",borderRadius: "50%"}}
                src={product.pickUrl}
                alt={product.name}
              />
              </div>
            </td>

            <td className=" border-0 border-success "><p className="d-flex justify-content-start flex-column p-0 m-0"> 
              <span>{product.name}</span><span style={{color:"#9CA3AF"}}>Item Price ${product.offerPercentage ? (product.price - product.price*(product.offerPercentage/100)) : product.price}</span>{product.offerPercentage?<span className="border rounded border-success text-center w-50 p-1 d-inline" style={{fontSize:"13px"}}>Discount Offer</span>:""}</p>
            <p className="p-0 m-0 fw-bold">  {product.offerPercentage?
              <span>$
                <span className="text-decoration-line-through">{product.price*orderItem.currentCount}</span>
                 <span >{(product.price - product.price*(product.offerPercentage/100))*orderItem.currentCount}</span>
              </span>:
            <span>${product.price*orderItem.currentCount}</span> }</p>
            </td>
            
             <td className="border-0 d-flex align-content-end justify-content-between" >
              <div className="d-flex align-content-end justify-content-between w-100" >
              <div
                className="border rounded text-between   p-1"
                style={{ width: "70px", height: "30px" }}
              >
                
                  <IoIosAddCircleOutline onClick={(e) => handleCounter("add", product.id, e)}
                  style={{ cursor: "pointer" }} size={17} />
                
                <span>{orderItem.currentCount}</span>
                 
                  <GrSubtractCircle size={16}  onClick={(e) => handleCounter("sub", product.id, e)}
                  style={{ cursor: "pointer" }}/>
                
              </div>
              <DeleteOutlined style={{color:"#F87171"}}  onClick={(e) => handleCounter("dele", product.id, e)}/>
              </div>
            </td>
             
          </tr>
        ));
      })}
    </tbody>
  </table>
) : (
   <Empty/>
)}
 
          </div>
          <footer className="process  overflow-hidden">
            <Link
              to="/cart"
              className="m-4  rounded text-decoration-none text-between border"
              style={{ backgroundColor: "#13B981", cursor: "pointer" }}
            >
              <span
                className="p-2 text-light fs-6"
                onClick={() => setSidebar(!sidebar)}
              >
                Proceed To Checkout
              </span>{" "}
              <span
                style={{ color: "#13B981" }}
                className="bg-light amount border rounded p-2 m-2 fw-bolder"
              >
               ${totalPrice?totalPrice.toFixed(2):0.00} 
              </span>
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SidebarHome;
