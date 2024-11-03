import React, { useContext, useState } from 'react';
import './header.scss';
import Logo from '../../assets/images/weblogo.svg';
import mypick from '../../assets/images/pick.png'
import { BellOutlined, DownOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import '../../mixin.scss';
import './navbar.scss'
import './header.scss'
import { Context } from '../../context/Appcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as regularUser } from '@fortawesome/free-regular-svg-icons';
import { useCounter } from '../../context/CounterContext';
import { SearchContext } from '../../context/SearchProduct';
 

const Navbar = () => {
  //  const [img,setImg]=useState({})
   const {sidebar, setSidebar}=useContext(Context)
   const {setSearchQuery,searchQuery}=useContext(SearchContext)
  const {userUid}=useContext(Context)
  const { state } = useCounter();
  const [search, setSearch] = useState({item:"" });

  const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;  
    setSearch({
      ...search,
      [name]: value,  
    });
    // console.log("search",search);
    const {item}=search
    setSearchQuery(item)
    navigate("menu")

  };
  console.log("searchQuery",searchQuery);
  //  if(img.name){
  //   console.log(img.name)
  //  }else{
  //   console.log("navbar 22 line")
   
  //   }

    


  
     
  
  return (
    <>
      <div className={`container-fluid sticky-container `} style={{ borderBottom: "1px solid #00000033" }}>
          <div className={`row navbar d-flex border border-dark px-md-3    py-md-3 py-1 navbar`} style={{backgroundColor:"#10B981"}}>
            <div className="col-md-2 d-none  d-md-flex   text-between ">
              <img
                style={{ width: "150px", objectFit: "contain" }}
                className="d-md-block d-sm-none"
                src={Logo}
                alt="logo"
              />
              
              
            </div>

             <div className="col-md-8 col-sm-12 text-Center ">
              <span className="p-2 m-1 text-between rounded  bg-light w-100">
                <input
                  type="text"
                  className="w-100"
                  name='item'
                  value={search.item}
                  onChange={(e)=>handleChange(e)}
                  style={{  border: "none", outline: "none", background: "none",    '::placeholder': { color: '#A8AEB9' }
                }}
                  placeholder="Search For Products"
                />
                
                <SearchOutlined  style={{ fontSize: '16px', color: '#A8AEB9' }}/>
                
                
              </span>
            </div>

            {/* Icons Column */}
            <div className="col-md-2 d-none d-md-flex text-end   ">
              <div className="text-between" style={{width:"80%"}}>
              <BellOutlined
                style={{ fontSize: '25px', color: '#ffffff' }}
              />
              <span style={{ position: 'relative' }}>
                  <ShoppingCartOutlined
                  style={{ fontSize: '25px', color: '#ffffff' }}
                  onClick={() => {
                    setSidebar(!sidebar);
                    // setNumItems(isOpen ? 0 : 1);
                  }}         

                /> 
                
                <span
                  className="bg-danger text-center text-light"
                  style={{position: 'absolute',top: '-10px',fontSize:"12px",left: '100%',transform: 'translateX(-50%',width: "70%",borderRadius: "55%",
                  }}
                >
                  {state.totalCount === 0
              ? `0`
              : state.totalCount < 10
              ? `${state.totalCount}`
              : state.totalCount}
                </span>
              </span>
              <span className="text-Center    visible " >
                <div className="file-input-wrapper">
                {userUid ? <img src={mypick}  style={{ width: "40px", height: "auto", objectFit: "cover",borderRadius:"50%" }} alt="imgUrl" /> : 
                    <>
                     <label className="custom-file-label text-Center " >
                     <FontAwesomeIcon icon={regularUser} style={{width:"20px",height:"20px",color:"#ffffff"}} />
                     </label>
                     </>      
                          }
      </div> 
              
              </span>
            </div>
            </div> </div>

        {/* Second Row */}
        <div className={`row text-Center p-3 d-none  d-md-flex   ` } style={{backgroundColor:"#ffffff",color:""}}>
        {/* Left Links Column */}
          <div className="col-md-6 col-sm-12 ">
            <div className="leftlinks ">
              <div className="dropdown">
                <button className="dropbtn mx-3 " >
                 <span className=''> Categories </span><DownOutlined className="icon"style={{ fontSize: "10px" }}/>

                </button>
                <div className="dropdown-content" style={{width:"200px"}}>
                  <Link className='m-1 p-1 rounded' to="/"><p className='text-between p-0 m-0'><span>Meat</span><span>icon</span></p></Link>
                  <Link className='m-1 p-1 rounded' to="/"><p className='text-between p-0 m-0'><span>Fruite</span><span>icon</span></p></Link>
                  <Link className='m-1 p-1 rounded' to="/"><p className='text-between p-0 m-0'><span>Vagitable</span><span>icon</span></p></Link>
                </div>
              </div>
              <Link style={{ textDecoration: "none" }} className='links mx-3' to='about'>About Us</Link>
              <Link style={{ textDecoration: "none" }} className='links mx-3' to='contact'>Contact Us</Link>
              <div className="dropdown">
                <button className="dropbtn mx-3">
                  Pages <DownOutlined className='iconpage' style={{ fontSize: "10px" }} />
                </button>
                <div className="dropdown-content " style={{width:"200px"}}>
                  <Link className=' m-1 p-1  rounded' to='/'>Home</Link>
                  <Link className=' m-1 p-1  rounded' to='/about'> <p className='text-between p-0 m-0'><span>About</span> <span>Icon</span></p></Link>
                  <Link className=' m-1 p-1  rounded' to='/megaoffer'> <p className='text-between p-0 m-0'><span>offers</span> <span>Icon</span></p></Link>
                  <Link className=' m-1 p-1  rounded' to='/contact'> <p className='text-between p-0 m-0'><span>Contact</span> <span>Icon</span></p></Link>
                  <Link className=' m-1 p-1  rounded' to='/menu'> <p className='text-between p-0 m-0'><span>Menu</span> <span>Icon</span> </p></Link>
                  <Link className=' m-1 p-1  rounded' to='/praivacy'> <p className='text-between p-0 m-0'><span>Praivacy</span> <span>Icon</span> </p></Link>
                  <Link className=' m-1 p-1  rounded' to='/terms'> <p className='text-between p-0 m-0'><span>Terms</span> <span>Icon</span> </p></Link>
                  <Link className=' m-1 p-1  rounded' to='/myaccount'> <p className='text-between p-0 m-0'><span>Myaccount</span> <span>Icon</span> </p></Link>
                 </div>
              </div>
              <Link
              to='megaoffer'
                className="rounded px-2 links"
                style={{
                  background: "rgba(255,0, 0, 0.2)",
                  position: "relative", // Set the parent to relative
                  cursor:"pointer"
                }}
              >
                Offers
                <span
                  className="bg-danger d-none d-xl-block"
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-2px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    animation: "rippleEffect 1.5s infinite",
                    overflow: "hidden",
                  }}
                ></span>
              </Link>
            </div>
          </div>

          {/* Right Links Column */}
          <div className="col-md-6 col-sm-12 text-end">
            <span className='mx-3'>PAKISTAN</span>
            <span className='mx-3'>
              <Link className='links' to="praivacy">Privacy Policy</Link>
            </span>
            <span className='mx-3'>
              <Link className='links' to='terms'>Terms & Conditions</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
