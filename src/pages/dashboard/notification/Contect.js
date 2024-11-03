import React, { useContext } from 'react'
import { Context } from '../../../context/Appcontext'

const Contect = () => {
  const {userMeassage}=useContext(Context)
  console.log("userMeassage in Contect dashboard",userMeassage)
  

  return (
    <div className='container-fluid '>
      <div className="row border">
        <div className="col text-Center border my-md-4 my-2">
         <h3>Users Messages</h3> 
        </div>
      </div>
      <div className="row text-Center my-md-3 m-1">
    {userMeassage && userMeassage.length > 0 ? (
         userMeassage.map((element, index) => (
          <div className="col-lg-4 col-md-4 col-6   ">
        <div key={index} className="  message-card border rounded m-md-2 m-1 ">
          <h3>Name: {element.name}</h3>
          <p className='p-0 m-0'>Email: {element.email}</p>
          <p className='p-0 m-0'>useremail: {element.useremail}</p>

          <p className='p-0 m-0'>Subject: {element.subject}</p>
          <p className='p-0 m-0'>Comment: {element.comment}</p>
          <p className='p-0 m-0'>Uid: {element.uid}</p>
          <p className='p-0 m-0'>id: {element.id}</p>
        </div>
            </div>

      ))
    ) : (
      <p>No messages found.</p>
    )}
    </div>
  </div>
  )
}

export default Contect
