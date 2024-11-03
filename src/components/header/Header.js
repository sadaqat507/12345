import React, { useContext } from 'react';
import Icon from '../../assets/images/phone.png'
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Appcontext';
import { auth } from '../../config/firestore';
import { signOut } from 'firebase/auth';
   const Header = () => {
    const { userUid } = useContext(Context); // Access context values

    const navigate=useNavigate()
    const logOut=()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        window.toastify("You are Logout ","warning")
        navigate("/auth/login") 
      }).catch((error) => {
        // An error happened.
        window.toastify("Please try again ","info")
        console.log("error in header",error)

      });
      
    } 
 


  return (
    <>
  <div className="container-fluid  d-md-block d-sm-none"  >
  <div className=" row d-none d-lg-flex p-2 ">
    <div className="col d-flex  align-items-center">
      <img src={Icon} alt="" />
      <span style={{ fontSize: "smaller" }}>
        We are available 24/7, Need help?
        <span className='text-success'>+099949343</span>
      </span>
    </div>
    <div className="col  text-end  ">
      <ul className='d-flex   liststyle' style={{  paddingLeft: 0, margin: 0 ,fontSize: "smaller"}}>
        <li className="mx-2" id='aboutus'><Link className='links'   to="about"> About Us </Link></li><span className='verticalborder' ></span>
        <li className="mx-2"><Link className='links'   to="contact"> Contact Us</Link> </li><span className='verticalborder' ></span>
        <li className="mx-2"><Link className='links'   to="myaccount"> My Account</Link> </li><span className='verticalborder' ></span>
        {userUid?<li className="mx-2 "><Link className=' links' to='/auth/login' onClick={logOut}>logout</Link> </li> :<li className="mx-2"><Link className='links' to='/auth/login'>Login</Link></li>}
      </ul>
    </div>
  </div>
</div>

    </>
  );
}

export default Header;
