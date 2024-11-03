import React, { useContext} from 'react';
import { OrderContext } from '../../../context/OrderContext';
import { ProductsContext } from "../../../context/ProductContext";
import { Image } from 'antd';

const Client = () => {
  const { order } = useContext(OrderContext);
  const { products } = useContext(ProductsContext);
  // const [courtomerData, setCoustomerData] = useState(null);

  console.log("order", order);
  console.log("product", products);
  // console.log("courtomerData", courtomerData);

   
  // console.log("courtomerData", courtomerData);


  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Img</th>
                <th scope="col">ProductID</th>
                <th scope="col">ClientName</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Pending/Submitted</th>
                <th scope="col">Deleted</th>
              </tr>
            </thead>
            <tbody>
              {/* Check if courtomerData is not null or undefined */}
              
                           
                      <tr >
                        <th scope="row">{1}</th>
                        <td>
                          <div className="border">
                            <Image width={200} src={ ""} />
                          </div>
                        </td>
                        <td>product.id || "N/A"</td>
                        <td>selected.clientName || "N/A"</td>
                        <td>selected.address || "N/A"</td>
                        <td>selected.phone || "N/A"</td>
                        <td>selected.status === "false" ? "Pending" : "Submitted"</td>
                        <td>selected.deleted ? "Deleted" : "Active"</td>
                      </tr>
                       
                <tr>
                  <td colSpan="8">No customer data available</td>
                </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Client;
