import React, { useState } from "react";
import "./style.scss/register.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth, firestore } from "../../config/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; 
const Register = () => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    samepassword:""
  });

  const handlChange = (e) => {
    const { name, value } = e.target;
    setInput((pre) => ({ ...pre, [name]: value }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inputs object", input);
    console.log(auth);

    const { firstname, lastname, email, password,samepassword } = input;

    if (firstname.length > 3 || lastname.length > 3) {
      if (window.isEmail(email)) {
        if (password.length > 6 || samepassword===password ) {
          await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("user", user);
            console.log("user.uid",user.uid)
            window.toastify("You are registered now", "success");
            const { firstname, lastname, email } = input;
          
            try {
              // Use setDoc to create a document with the UID as the ID
              setDoc(doc(firestore, "users", user.uid), {
                firstname,
                lastname,
                email,
                user: user.uid,
              });
              console.log("Document written with ID: ", user.uid);
              navigate("/auth/login");
    
            } catch (e) {
              console.error("Error adding document: ", e);
            }
            
          })
                      .catch((error) => {
              // const errorCode = error.code;
              const errorMessage = error.message;
              if(errorMessage){
                window.toastify("USER is already Present", "error");
    
              }else{
                window.toastify("Please try again", "info");
    
              }
              // ..
            });
        } else {
          window.toastify("Please set Six password digits", "info");
    
        }
      } else {
        window.toastify("Please set any regex", "error");
      }
    } else {
      window.toastify("Name length is incomplete", "info");
    }
  };

  return (
    <div className="container-fluid ">
      <div className="row " style={{ height: "100vh" }}>
        <div className="col text-Center border parentform">
          <form className="form">
            <p className="title">Register </p>
            <p className="message">
              Signup now and get full access to our app.{" "}
            </p>
            <div className="flex">
              <label >
                <input
                  className="input"
                  name="firstname"
                  style={{width:"90%"}}
                  type="text"
                  onChange={(e) => handlChange(e)}
                  required
                />
                <span>Firstname</span>
              </label>
              <label>
                <input
                  className="input"
                  name="lastname"
                  style={{width:"90%"}}

                  type="text"
                  onChange={(e) => handlChange(e)}
                  required
                />
                <span>Lastname</span>
              </label>
            </div>
            <label>
              <input
                className="input"
                name="email"
                type="email"
                onChange={(e) => handlChange(e)}
                required
              />
              <span>Email</span>
            </label>
            <label>
              <input
                className="input"
                name="password"
                type="password"
                onChange={(e) => handlChange(e)}
                required
              />
              <span>Password</span>
            </label>
            <label>
              <input
                className="input"
                name="samepassword"
                type="password"
                required
              />
              <span>Confirm password</span>
            </label>

            <button className="submit" onClick={(e) => handleSubmit(e)}>
              Register
            </button>
            <p className="signin">
              Already have an acount ? <Link to="/auth/login">Signin</Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
