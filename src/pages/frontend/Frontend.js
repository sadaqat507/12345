import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Cart from './card/Cart'
import Footer from '../../components/footer/Footer'
import Private from '../dashboard/private/Private'
// import DashbardHome from '../dashboard/home/Home'
import Menu from './menu/Menu'
import Myaccount from '../auth/Myaccount'
import Contact from './contect/Contect'
import Navbar from '../../components/header/Navbar'
import Praivacy from './privacy&tems/Praivacy'
import Tearmcondition from './privacy&tems/Tearmcondition'
import './frontend.scss'
import Megaoffer from './megaoffer/Megaoffer'
import Dashboard from '../dashboard/Dashboard'
 import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Context } from '../../context/Appcontext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faUser as regularUser } from '@fortawesome/free-regular-svg-icons';
import MomileSidebar from './home/MomileSidebar'
import { useCounter } from '../../context/CounterContext'
  
const Frontend = () => {

  const {sidebar, setSidebar}=useContext(Context)
  const { state } = useCounter();


  return (
    <>
       <Header />
      <Navbar/>
               <div className='text-Center'>
                <Routes  style={{ paddingTop: "60px" }}>
                < Route path="/" element={<Home />} />
                 <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/megaoffer' element={<Megaoffer/>}/>
                <Route path="/praivacy" element={<Praivacy />} />
                <Route path="/terms" element={<Tearmcondition />} />
                <Route path="/myaccount" element={<Myaccount/>} />
                <Route path="/private" element={<Private />}>
                <Route path="dashboard/*" element={<Dashboard />} />
                </Route>
              </Routes>
              
              </div>
             
    
      <Footer />
      <div className="container-fluid  greenbg" style={{position:"sticky",bottom:"0"}}>
        <div className="row d-md-none d-sm-flex p-2 text-Center">
          <div className="col  headerLinks text-Center" ><MomileSidebar/></div>
          <div className="col text-Center "><Link to='/'><HomeOutlined style={{fontSize:"20px",color:"#ffffff"}}/></Link></div>
          <div className="col text-Center"><span style={{ position: 'relative' }}>
                  <ShoppingCartOutlined
                  style={{ fontSize: '25px', color: '#ffffff' }}
                  onClick={() => {
                    setSidebar(!sidebar);
                    // setNumItems(isOpen ? 0 : 1);
                  }}         

                /> 
                
                <span
                  className="bg-danger text-center text-light"
                  style={{position: 'absolute',top: '-10px',left: '100%',transform: 'translateX(-50%)',fontSize: '12px',width: "70%",borderRadius: "55%",
                  }}
                >
                 {state.totalCount === 0
              ? `0`
              : state.totalCount < 10
              ? `${state.totalCount}`
              : state.totalCount}
                </span>
              </span> </div>
          <div className="col text-Center">
           <Link to='auth/login'><FontAwesomeIcon icon={regularUser} style={{width:"20px",height:"20px",color:"#ffffff"}} /></Link>
          </div>
         </div>
      </div>
 
    </>
  )
}

export default Frontend
