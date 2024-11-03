import React, { useContext, useState } from "react";
import { Button, Checkbox, Form, Input, Typography, message } from "antd";
import { Context } from "../../../context/Appcontext";
import { doc, setDoc } from "firebase/firestore";
import { firestore, storage } from "../../../config/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Product = () => {
  const { isProcessing, setIsProcessing, customdate } = useContext(Context);
  const [file, setFile] = useState(null);
  const [componentVariant, setComponentVariant] = useState("filled");
  const id = Math.random().toString(36).slice(2);
  const [isOffer, setIsOffer] = useState(false);

  const handleOfferChange = (e) => {
    setIsOffer(e.target.checked);
  };
  console.log(isOffer);

  // console.log(customdate)
  const onFormVariantChange = ({ variant }) => {
    setComponentVariant(variant);
  };

  const onFinish = async (values) => {
    if (!file) {
      message.error("Please upload a file before submitting");
      return;
    }
    console.log(values);
    setIsProcessing(true);

    try {
      const storageRef = ref(storage, `file/${id}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      await setDoc(doc(firestore, "products", id), {
        ...values,
        pickUrl: downloadURL,
        createdDate: customdate,
        updateDate: customdate,
        status: "false",
      });
      message.success("Product added successfully!");
      values("");
    } catch (error) {
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container-fluid ">
      <div className="row greenbg rounded-pill m-lg-3 m-md-2 m-1 ">
        <Link
          className="col text-light text-Center btn "
          to="/private/dashboard/crud"
        >
          All Product
        </Link>
      </div>
      <div className="row text-Center ">
        <div className="col-lg-8 col-md-10 col-12 ">
          <Form
            onValuesChange={onFormVariantChange}
            layout="vertical"
            variant={componentVariant}
            style={{ maxWidth: "100vw" }}
            initialValues={{ variant: componentVariant }}
            onFinish={onFinish}
          >
            <Title level={2} className="text-center">
              Product Add
            </Title>
            <Form.Item
              label="Product Name"
              name="name"
              rules={[
                { required: true, message: "Please insert name of Product!" },
              ]}
            >
              <Input style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Quantity"
              name="stock"
              rules={[
                {
                  required: true,
                  message: "Please insert quantity of Product!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* Form Item for Price */}
            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: "Please input the price!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Product Detail"
              name="productDetail"
              rules={[
                {
                  required: true,
                  message: "Please input the product details!",
                },
              ]}
            >
              <Input.TextArea
                rows={4} // Set number of rows to make the textarea larger
                placeholder="Enter product details"
              />
            </Form.Item>
            {/* File Input for Uploading Product Image */}
            <Form.Item
              label="Upload Pick"
              rules={[{ required: true, message: "Please upload Pick!" }]}
            >
              <Input
                type="file"
                style={{ border: "none", outline: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Item>
            <Form.Item>
              <Checkbox checked={isOffer} onChange={handleOfferChange}>
                Add as Offer
              </Checkbox>
            </Form.Item>
                        <Form.Item
              label="Offer Percentage"
              name="offerPercentage"
              rules={[
                {
                  required: isOffer, // Only required if the offer checkbox is checked
                  message: "Please insert the offer percentage!",
                },
                {
                  validator: (_, value) => {
                    if (value && (isNaN(value) || value < 1 || value > 100)) {
                      return Promise.reject(
                        "Please enter a valid percentage between 1 and 100"
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Enter offer percentage"
                min={1}
                max={100}
                onChange={(e) => (e.target.value = Number(e.target.value))} // Ensure the input is treated as a number
              />
            </Form.Item>
            {/* Submit Button */}
            <Form.Item className="text-Center">
              <Button
                type="primary"
                loading={isProcessing}
                size="large"
                htmlType="submit"
              >
                Create
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Product;
