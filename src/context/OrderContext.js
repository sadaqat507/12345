import { collection, getDocs } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { firestore } from '../config/firestore'; 
// import { Context } from './Appcontext';
import { ProductsContext } from './ProductContext';
   
export const OrderContext = createContext();


 const OrderContextProvider = ({ children }) => {
     const [order,setOrder]=useState(null)
    //  const {userUid}=useContext(Context)
      const {products}=useContext(ProductsContext)

// console.log("order",order);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(firestore, "UserOrder"));
            // Map through the documents to extract data
            const orders = querySnapshot.docs.map((doc) => ({
              id: doc.id, // Each document has an ID
              ...doc.data(), // Spread the rest of the document data
            }));
            setOrder(orders); 

            } catch (error) {
            console.error("Error fetching documents: ", error);
          }
        };
        fetchData();
      }, []);

      useEffect(()=>{
       console.log(order);
       console.log(products);
             
        // products.map((item,i)=>{
        //  console.log(item);
        // })
        if (Array.isArray(order) && order.length > 0) {
          const combinedOrders = order.map((orderItem, i) => {
            console.log("Order item:", orderItem);
      
            // Find the matching product based on productId (assuming productId exists in both)
            const matchedProduct = products.find((product) => product.id === orderItem.productId);
      
            // Construct the combined orderDetail object, keeping the desired structure
            const orderDetail = { 
              id: orderItem.id, // order item id
              userUid: orderItem.userUid, // order userUid
              userOrder: {
                orderFinalize: orderItem.orderFinalize || "N/A", // Assuming you want to finalize from orderItem
                status: orderItem.status || ["inactive"], // status from orderItem, defaulting to "inactive" if not available
              },
              productDetails: matchedProduct || null, // Add product details if found
            };
      
            console.log("Combined orderDetail:", orderDetail);
            return orderDetail;
          });
          console.log("combinedOrders",combinedOrders);
        }      
        console.log(order);
           



      })

    
  return (
    <OrderContext.Provider value={{order,setOrder}}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

