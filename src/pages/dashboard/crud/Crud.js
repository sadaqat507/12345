import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { firestore, storage } from "../../../config/firestore";
import "./crud.scss";
import { deleteObject, ref } from "firebase/storage";
import { Modal, Spin } from "antd";
import { Context } from "../../../context/Appcontext";
import { Link } from "react-router-dom";
 
const Crud = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isProcessing, setIsProcessing,customdate } = useContext(Context); // Context for handling loading state
  const [selectProduct,setSelectProduct]=useState(null)

  const [updateProduct, setUpdateProduct] = useState({name: "",price: "",stock: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const showModal = () => {
    setIsModalOpen(true);
    console.log("selectProduct",selectProduct)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "products"));
        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsArray);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = (item) => {
    setUpdateProduct(item)
    setSelectProduct(item);  // Load the clicked product into the state
    showModal();  // Show modal for editing
    console.log(item)
   };

  


  const handleOk = async () => {
    setIsProcessing(true); // Start processing state
    const productRef = doc(firestore, "products", updateProduct.id); // Reference to the document

    try {
      // Update the product in Firestore
      await updateDoc(productRef, {
        name: updateProduct.name,
        price: updateProduct.price,
        stock: updateProduct.stock,
        createdDate:updateProduct.createdDate, 
        updateDate: customdate,
      });

      // Display success message
      window.toastify("Product is updated", "success");

      // Fetch updated products list
      const querySnapshot = await getDocs(collection(firestore, "products"));
      const updatedProductsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Update the products state
      setProducts(updatedProductsArray);

      // Close the modal
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating product: ", error);
      window.toastify("Failed to update product", "error");
    } finally {
      setIsProcessing(false); // Stop processing state
    }
  };


  const handleActive = async (item) => {
    // Check if the updateProduct object and its id are defined
    if (!item || !item.id) {
      console.error("Product ID is missing or undefined");
      window.toastify("Product ID is missing", "error");
      return; // Early return if ID is invalid
    }
  
    const productRef = doc(firestore, "products", item.id); // Reference to the document
  
    try {
      // Update the product in Firestore
      await updateDoc(productRef, {
        status: "true"
      });
  
      // Display success message
      window.toastify("Now your product is added in the app successfully", "success");
  
      // Fetch updated products list
      const querySnapshot = await getDocs(collection(firestore, "products"));
      const updatedProductsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      // Update the products state
      setProducts(updatedProductsArray);
    } catch (error) {
      console.error("Error updating product: ", error);
      window.toastify("Failed to update product", "error");
    } finally {
      setIsProcessing(false); // Stop processing state
    }
  };
  

  const handleDelete = async (item) => {
    try {
      await deleteDoc(doc(firestore, "products", item.id));
      const desertRef = ref(storage, `file/${item.id}`);
      deleteObject(desertRef)
        .then(() => {
          console.log("Deleted file", desertRef);
        })
        .catch((error) => {
          window.toastify("Something went wrong. Please try again", "error");
        })
        .finally(() => {
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== item.id)
          );
        });
      window.toastify("Data is deleted", "success");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);  // Close modal on cancel
  };

  return (
    <div className="container-fluid">
      <div className="row greenbg rounded-pill m-lg-3 m-md-2 m-1">
         <Link className="col text-light text-Center btn "  to='/private/dashboard/product'>Add Product</Link>
       </div>
      <div className="row">
        <div className="col text-center">
          <h3>Update/Delete Process</h3>
        </div>
      </div>

      <div className="row m-lg-2 m-1  text-Center table-responsive">
        <div className=" col-12 ">
          <table className="table text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Img</th>
                <th>Name</th>
                {/* <th>id</th> */}
                <th>Price</th>
                <th>Stock</th>
                <th>C/U</th>
                <th>Active/Inactive</th>
                <th>Update/Delete</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="12"><Spin /></td>
                </tr>
              ) : products.length > 0 ? (
                products.map((item, i) => (
                  <tr key={item.id}>
                    <th>{i + 1}</th>
                    <td>
                      <img
                        src={item.pickUrl}
                        alt={item.name}
                        style={{ width: "40px", height: "40px" }}
                      />
                    </td>
                    <td>{item.name}</td>
                    {/* <td>{item.id}</td> */}
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td>{item.createdDate} <br /> {item.updateDate}</td>
                     
                    <td>{item.status === "true" ?  "Active" : <button className="btn "  style={{backgroundColor:"#FFC648"}} onClick={()=>handleActive(item)} >Inactive</button>}</td>
                    <td className="">
                      <div className="d-lg-flex">
                      <button
                        className="btn bg-info border rounded-pill m-1 "
                        onClick={() => handleUpdate(item)}
                      >
                        Update
                      </button>
                      <button
                        className="btn border btn-danger rounded-pill m-1"
                        onClick={() => handleDelete(item)}
                      >
                        Delete
                      </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Modal title="Basic Modal" open={isModalOpen} loading={isProcessing} onOk={handleOk} onCancel={handleCancel}>
        <form>
          <div className="group">
            <input
              placeholder="Product Name"
              type="text"
              name="name"
              value={updateProduct.name}
              onChange={handleChange}
              className="input"
            />
            <input
              placeholder="Product Price"
              type="text"
              name="price"
              value={updateProduct.price}
              onChange={handleChange}
              className="input"
            />
            <input
              placeholder="Product Stock"
              type="text"
              name="stock"
              value={updateProduct.stock}
              onChange={handleChange}
              className="input"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Crud;
