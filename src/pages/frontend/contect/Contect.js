import React, { useContext } from "react";
import ContactImg_1 from "../../../assets/images/fish.webp";
import ContactImg_2 from "../../../assets/images/slide3.png";
import ContectUs from "../../../assets/images/contact-us.webp"
import { BellOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Form, Input,  Button, Row, Col } from 'antd';
import { Context } from "../../../context/Appcontext";
import SidebarHome from "../home/Sidebar";
 
const layout = {
  labelCol: {
    span: 16,
  },
  wrapperCol: {
    span: 32,
  },
};
 
 ;




const Contect = () => {
  const { userUid,useremail,isProcessing } = useContext(Context); 
   const id = Math.random().toString(36).slice(2);
  
  const onFinish = async (values) => {
    console.log('Received form values: ', values);
  
    const sameUser = {
      ...values.user,  
      uid: userUid,
      useremail:useremail,
      id,
    };
  
    console.log( sameUser)
  };
   
  // const showMessages= async()=>{
     
  //     }

  return (
    <div className="container-fluid">
              <SidebarHome />

      <div className="row d-flex" style={{ backgroundColor: "#EEF2FF" }}>
        <div
          className="col-md-6 col-lg-4 col-12 "
          style={{
            backgroundImage: `url(${ContactImg_1})`,
            backgroundSize: "8em",
            backgroundRepeat: "no-repeat",
            height: "10em",
            backgroundPositionY: "center",
          }}
        ></div>
        <div className="col-md-6 col-lg-4 col-12 text-Center">
          <h2>Contact Us</h2>
        </div>
        <div
          className="col-md-6 col-lg-4 col-12"
          style={{
            backgroundImage: `url(${ContactImg_2})`,
            backgroundPosition: "right",
            backgroundSize: "10em",
            backgroundRepeat: "no-repeat",
            height: "10em",
            backgroundPositionY: "center",
          }}
        ></div>
      </div>
      <div className="row  d-flex justify-content-evenly my-4">
        <div className="col-md-6 col-lg-3 col-12   ">
          <div
            className="box border text-Center flex-column fs-5  "
            style={{ height: "15em", borderRadius: "10px" }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: "40px" }}
              className="greentext"
            />
            <h3>Email Us</h3>
            <p className="text-center " style={{ width: "80%" }}>
              <span className="greentext">info@kachabazar.com </span>
              Interactively grow empowered for process-centric total linkage.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 col-12   ">
          <div
            className="box border text-Center flex-column fs-5  "
            style={{ height: "15em", borderRadius: "10px" }}
          >
            <BellOutlined style={{ fontSize: "40px" }} className="greentext" />
            <h3>Call Us</h3>
            <p className="text-center " style={{ width: "80%" }}>
              <span className="greentext">029-00124667</span>{" "}
              Distinctively disseminate focused solutions clicks-and-mortar
              ministate.
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 col-12   ">
          <div
            className="box border text-Center flex-column fs-5  "
            style={{ height: "15em", borderRadius: "10px" }}
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ fontSize: "40px", marginTop: "30px" }}
              className="greentext"
            />
            <h3>Location</h3>
            <p className="text-center " style={{ width: "80%" }}>
              <span className="greentext">029-00124667</span> Boho One,
              Bridge Street West, Middlesbrough, North Yorkshire, TS2 1AE.
              561-4535 Nulla LA United States 96522.
            </p>
          </div>
        </div>
      </div>
       <div className="row">
        <div className="col-md-6 d-none d-md-block ">
          <img src={ContectUs} className="mx-4" alt="ContectUs" style={{width:"80%"}} />
        </div>
        <div className="col-12 col-md-6  text-Center">
          <div  className="" style={{width:"80%"}}>
         <h1 className="fs-2 fw-bold">For any suppoort just send your query</h1>
         <p className="FS-3">Collaboratively promote client-focused convergence vis-a-vis customer-directed alignments via plagiarized strategic users and standardized infrastructures.</p>
           
               <Form
  {...layout}
  layout="vertical"
  name="nest-messages"
  onFinish={onFinish}
  style={{
    maxWidth: 600,
  }}
   
>
  <Row gutter={16}>
    <Col xs={24} md={12}>
      <Form.Item
        name={['user', 'name']}
        label="Your Name"
         
      >
        <Input placeholder="Enter Your Name" name="name" style={{height:"50px"}}/>
      </Form.Item>
    </Col>
    <Col xs={24} md={12}>
      <Form.Item
        name={['user', 'email']}
        label="Your Email"
        
        rules={[
          {
            type: 'email',
            required: true,

          },
        ]}
      >
        <Input placeholder="Enter Your email" name="email" style={{height:"50px"}}/>
      </Form.Item>
    </Col>
  </Row>

   
  <Row gutter={16}>
    <Col span={24}>
      <Form.Item
        name={['user', 'subject']}
        label="Subject"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Enter You Subject" name="subject" style={{height:"50px"}} />
      </Form.Item>
    </Col>
  </Row>

  <Row gutter={16}>
    <Col span={24}>
      <Form.Item
        name={['user', 'comment']}
        label="Comment"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea  placeholder="Write your message here"  name="userdescription"  autoSize={{ minRows: 3, maxRows: 5 }} 
 />
      </Form.Item>
    </Col>
  </Row>

  <Form.Item
    wrapperCol={{
        
    }}
    
    >
    <Button type="primary" htmlType="submit" loading={isProcessing} className="fs-6 fw-bold mx-2" style={{width:"30%",backgroundColor:"#10B981"}}>
      Send Message
    </Button>
     
  </Form.Item>
</Form>
         </div>
        </div>
       </div>

    </div>
  );
};

export default Contect;
