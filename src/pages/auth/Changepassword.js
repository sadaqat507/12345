import React, { useContext, useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../config/firestore';
import { Context } from '../../context/Appcontext';

const  Changepassword = () => {
  const {isProcessing,setIsProcessing } = useContext(Context); // Access context values
    const [input,setInput]=useState({email:"",password:""})
    
    const navigate=useNavigate()
    const handleChange = (e) => {
      const {name,value}=e.target;
      setInput((pre)=>({...pre,[name]:value}))
   };
   
     
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const {email}=input
      sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsProcessing(true); // Start processing
      console.log("input",input) 
        console.log("Password reset email sent!");
        navigate("/") 

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error sending email:", errorCode, errorMessage);
      });

      
       
      // Simulate a 2-second delay for processing
      
    };
  
     
  
  

  return (
    <div className=' text-Center' style={{minHeight:"99.5vh"}}>
         
           <div className="form border parentform">
            <h4>Changepassowrd</h4 >
             <Form
      name="changepassowrd"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
     >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} onChange={(e)=>handleChange(e)} name='email' placeholder="Enter you email" type='email' />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} name='password' type="password" onChange={(e)=>handleChange(e)} placeholder="New Password" />
      </Form.Item>  
 
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
         </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" loading={isProcessing} onClick={(e)=>handleSubmit(e)}>
        Changepassowrd
        </Button>
        or <Link to='/auth/login'>login now!</Link>
      </Form.Item>
    </Form>
           </div>

     </div>
  )
}

export default  Changepassword
