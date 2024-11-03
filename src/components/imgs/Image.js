import React from 'react'

const Image = ({src,alt,name,first,second,third}) => {
  return (<>
    <div className="col-6 col-md-2  text-Center   Categories">
    <div className='text-Center flex-column Categorie  '>
    <img style={{height:"40%",objectFit:"contain"}} className=' ' src={src} alt={alt} />
    <p className="p-0 m-0">{name}</p>
    </div>
    <div className=' '>
    <p className="px-2 p-0 m-0 " style={{color:"#9CA3AF",fontSize:"12px"}}>{first}</p>
    <p className="px-2 p-0 m-0 " style={{color:"#9CA3AF",fontSize:"12px"}}>{second}</p>
    <p className="px-2 p-0 m-0 " style={{color:"#9CA3AF",fontSize:"12px"}}>{third}</p>
    </div>
            </div>
            </>
  )
}

export default Image
