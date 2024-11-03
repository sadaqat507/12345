import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
 import Blanck404 from '../../Blanck404';
import { Context } from '../../../context/Appcontext';
 
const Private = () => {
  const {userUid}=useContext(Context)
  const admin= userUid;
   if(admin==="GVcZeYOmt2P6Fq3tmB0QigZWt363"){
    return <>
    <Outlet/>
     </>
   }else{
    return  <Blanck404/>
   }
}

export default Private
