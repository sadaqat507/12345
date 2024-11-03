import React, { useContext, useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firestore';
import { Context } from '../../context/Appcontext';
 
const Login = () => {
  
  const [input,setInput]=useState({email:"",password:""})
  const { userUid,isProcessing,setIsProcessing } = useContext(Context); // Access context values

  const navigate=useNavigate()
  const handleChange = (e) => {
    const {name,value}=e.target;
    setInput((pre)=>({...pre,[name]:value}))
 };
 
   

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(userUid){ 
      window.toastify("You are already login.", "info");
      navigate("/") 
    }else{
    console.log("input",input)
    setIsProcessing(true); // Start processing
   const {email,password}=input
   await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
     navigate("/") 

    const user = userCredential.user;
    window.toastify("You are login Now", "success");
    console.log("user",user)
    console.log(user.uid)

    // ...
  })
  .catch((error) => {
     
    window.toastify(`error in server. Try again ${error}`, "danger");

  });

     

    }

     
    // Simulate a 2-second delay for processing
    
  };

  



  return (
    <div className=' text-Center' style={{minHeight:"99.5vh"}}>
         
           <div className="form border parentform">
            <h4 >Login</h4 >
             <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      
      
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} name="email" onChange={(e)=>handleChange(e)} placeholder="Email" />
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
        <Input.Password prefix={<LockOutlined />} type="password" name="password" onChange={(e)=>handleChange(e)} placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link to='/auth/forgotpassword'>Forgot password</Link>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" loading={isProcessing} onClick={handleSubmit}>
          Login
        </Button>
        or <Link to='/auth/register' >Register now!</Link>
      </Form.Item>
    </Form>
           </div>

     </div>
  )
}

export default Login
