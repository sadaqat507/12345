import { MenuUnfoldOutlined} from '@ant-design/icons';
import {  Drawer } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MomileSidebar = () => {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const showLoading = () => {
      setOpen(true);
      setLoading(true);
  
      // Simple loading mock. You should add cleanup logic in real world.
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

  return (
    <>
       
      <MenuUnfoldOutlined style={{color:"#ffffff",fontSize:"20px"}} onClick={showLoading}/>
      
      <Drawer
        closable
        destroyOnClose
         placement="left"
        open={open}
        loading={loading}
        width={300}
        onClose={() => setOpen(false)}
      > 
         
         <div  className='m-3 text-between'>
         <Link className='links ' to='about' onClick={()=>setOpen(false)}>About Us</Link>  
         </div>
         <div  className='m-3 text-between'>
         <Link className='links ' to='contact' onClick={()=>setOpen(false)}>Contact</Link>  
         </div>
         <div  className='m-3 text-between'>
         <Link className='links ' to='praivacy' onClick={()=>setOpen(false)}>Privacy Policy</Link>  
         </div>
         <div  className='m-3 text-between'>
         <Link className='links ' to='terms' onClick={()=>setOpen(false)}>Terms & Conditions</Link>  
         </div>

         
      </Drawer>
    </>
  )
}

export default MomileSidebar
