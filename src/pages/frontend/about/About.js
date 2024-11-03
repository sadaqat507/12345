import React from 'react'
import AboutImg from '../../../assets/images/slide2.png'
import About1 from '../../../assets/images/about1.png'
import SidebarHome from '../home/Sidebar'
const About = () => {
  return (
    <div className="container-fluid" id='aboutus'>
                    <SidebarHome />

      <div className="row">
        <div className="col">
        <div className='text-center fs-3  fw-bolder' style={{backgroundImage:`url(${AboutImg})`,backgroundPosition:"center",backgroundSize:"30%",backgroundRepeat:"no-repeat",height:"10em",width:"100%",color:"#E0543A",backgroundColor:"#F3F6FD"}}>
        About Us
        </div>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-md-6 col-12 border">
          <div className='' style={{marginLeft:"30px" ,marginTop:"40px"}}>
           <p className='fs-3 fw-bolder'>Welcome to our KachaBazar shop</p>
            <p className='text-indent' style={{textIndent: "2em",  textAlign:" justify"
}}>  Holisticly seize parallel metrics and functional ROI.Seamlessly revolutionize error-free internal or organic sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal. Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
              </p >
          </div>
          <div className="boxes d-md-flex  p-4 border">
            <div className="Lovely border p-4 m-2" style={{backgroundColor:"#EEF2FF",borderRadius:"10px"}}>
            <p className='fw-bolder fs-3'>8K</p>
            <p className='fw-bolder fs-4 p-0 m-0'>Lovely Customer</p>
             <span className='fs-5'>Competently productize virtual models without performance.</span>
            </div>
            <div className="Listed border p-4 m-2" style={{backgroundColor:"#EEF2FF",borderRadius:"10px"}}>
            <p className='fw-bolder fs-3'>10K</p>
            <p className='fw-bolder p-0 m-0 fs-4'>Listed Products</p>
            
             <span className='fs-5'>Dynamically morph team driven partnerships after vertical</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 p-md-4 p-1 text-Center">
            
          <img src={About1} alt="About1" style={{width:"100%",height:"80%"}} />
        </div>
      </div>
    </div>
    
  )
}

export default About
