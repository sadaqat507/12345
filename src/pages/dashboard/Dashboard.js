import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardHome from "./home/Home";
import Client from "./notification/Client";
import Product from "./notification/Product";
import Contect from "./notification/Contect";
import Crud from "./crud/Crud";
import Sidebar from "./sidebar/Sidebar";
import RawProdect from "./assets/RawProdect";
import FinalProduct from "./assets/FinalProduct";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid  ">
        <div className="row d-flex" >
          <div
            className="col-lg-2  col-12 border-end    "
            // style={{ height: "100vh" }}         
             >
            <Sidebar />
          </div>
          <div className="col-lg-10  col-12    overflow-y-scroll" style={{height: "100vh"}}>
            <Routes>
              <Route path="home" element={<DashboardHome />} />
              <Route path="client" element={<Client />} />
              <Route path="product" element={<Product />} />
              <Route path="contect" element={<Contect />} />
              <Route path="crud" element={<Crud />} />
              <Route path="rawprodect" element={<RawProdect />} />
              <Route path="finalprodect" element={<FinalProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
