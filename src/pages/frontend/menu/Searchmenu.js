import React, { useContext } from 'react'
 import { ProductsContext } from '../../../context/ProductContext';
import { MedicineBoxOutlined } from '@ant-design/icons';
import { GrSubtractCircle } from 'react-icons/gr';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useCounter } from '../../../context/CounterContext';
import { SearchContext } from '../../../context/SearchProduct';
import Blanck404 from '../../Blanck404';
 const Searchmenu = () => {
const {products}=useContext(ProductsContext)
const { state, dispatch } = useCounter();
const { searchQuery,clearSearch}=useContext(SearchContext)

   const handleCounter = (operation, productId, e) => {
    e.preventDefault(); // Prevent default behavior
    dispatch({ type: operation, productId });
  };

 
if(!searchQuery){
  clearSearch()
}


console.log("products",products);
const textFind=searchQuery
console.log("textFind",textFind);
  return (

    <>{textFind?
       <>
        {products && products.length > 0 ? (
    products
      .filter((product) =>
        product.name.toLowerCase().trim()===textFind.toLowerCase().trim()||
       product.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      //  product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((product) => {
        const counter = state.productCounters[product.id] || 0; // Fixed counter retrieval
             
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
                <span style={{ color: "#C2410C" }}>{product.stock}</span>
              </span>
            </div>

            <div className="section2 text-center object-fit-cover" style={{ height: "150px" }}>
              <img src={product.pickUrl}  alt={product.id} className="papular object-fit-cover h-100" />
            </div>

            <div className="section3 px-2">{product.name}</div>

            <div className="section4 mb-3 px-2 d-flex justify-content-between">
              <div className="price fw-bold">₹{product.price}</div>

              <div className="chart border rounded px-1 text-between " style={{color:"#D3D3D3"}}>
                <span
                  className="text-Center  "
                  onClick={(e) => handleCounter("add", product.id, e)}
                  style={{ cursor: "pointer" }}
                >
                  <IoIosAddCircleOutline size={17} />
                </span>

                <span className="px-1   text-Center">
                  {counter > 0 ? (
                     counter<=9? `0${counter}`:counter
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
        
       </>
       : <div className='text-Center flex-column'><Blanck404/> <p className='fs-3'>Sorry, we can not find this product 😞</p></div> }</>
  )
}

export default Searchmenu