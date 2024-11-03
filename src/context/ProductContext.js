import { collection, getDocs } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import { firestore } from '../config/firestore';
//  import banner2 from "../assets/images/banner.jpeg";
// import appconection from " ../assets/images/appconection.webp";
import mypick from "../assets/images/mypick.png";
import cat from "../assets/images/cat.jpg";
import water from "../assets/images/water.webp";
import tea from "../assets/images/tea.png";
import butter from "../assets/images/butter.png";
import womam from "../assets/images/womam.png";
import biscuits from "../assets/images/biscuits.webp";
import jam from "../assets/images/jam.png";
import breakfast from "../assets/images/breakfast.png";
import fish from "../assets/images/fish.webp";
import cooking from "../assets/images/cooking.webp";
import closeflower from "../assets/images/closeflower.webp";
  
export const ProductsContext = createContext();

 const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const categories = {mypick,cat,water,tea,butter,womam,biscuits,jam,breakfast,fish,cooking,closeflower,
    };
  
    const {mypick: pickMypick,cat: pickCat,water: pickWater,tea: pickTea,butter: pickButter,womam: pickWomam,biscuits: pickBiscuits,jam: pickJam,breakfast: pickBreakfast,fish: pickFish,cooking: pickCooking,closeflower: pickCloseflower,
    } = categories;

    const menu=[
      
      {pick: pickCat,name:"Pett Care",text:["Cat Care","Dog Care"]},
      {pick: pickWater,name:"Water",text:["Water Filter","Cleaning Tools","Pest Control"]},
      {pick: pickMypick,name:"Sadaqat Ali"},
      {pick: pickTea,name:"Tea",text:["Tea","Juice","Water"]},
      {pick: pickButter,name:"Butter",text:["Butter & Ghee","Ice Cream","Dairy"]},
      {pick: pickWomam,name:"Woman",text:["Woman","Men"]},

      {pick: pickBiscuits,name:"Biscuits",text:["Biscuits","Cakes"]},

      {pick: pickJam,name:"Jam & Jelly"},

      {pick: pickBreakfast,name:"Breakfast",text:["Cereals","Breads"]},

      {pick: pickFish,name:"Fish",text:["Fish","Meats"]},
      {pick: pickCooking,name:"Cooking",text:["Cooking..."]},
      {pick: pickCloseflower,name:"Closeflower",text:["Water Filter","Cleaning Tools","Pest Control"]},
      
    ]
       
    


    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(firestore, "products"));
            const productsArray = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setProducts(productsArray);
          } catch (error) {
            console.error("Error fetching documents: ", error);
          } finally {
            // setLoading(false);
          }
        };
        fetchData();
      }, []);

  return (
    <ProductsContext.Provider value={{products,setProducts,menu}}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

