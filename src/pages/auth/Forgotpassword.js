import React, { useContext } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firestore";
import { updatePassword } from "firebase/auth";
import { Context } from "../../context/Appcontext";

const Forgotpassword = () => {
  const {isProcessing,setIsProcessing } = useContext(Context); 

  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const { password } = values; // Access values from the form fields
    setIsProcessing(true); // Start processing
    const user = auth.currentUser;

    if (!user) {
      window.toastify("No authenticated user. Please log in.", "error");
      setIsProcessing(false);
      return;
    }

    try {
      if (password.length > 6) {
        window.toastify("Password fill untill 6 digits", "success");
      } else {
        await updatePassword(user, password);
        window.toastify("Password updated successfully", "success");
        navigate("/auth/login");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      window.toastify("Failed to update password. Please try again.", "error");

      if (error.code === "auth/requires-recent-login") {
        window.toastify(
          "Please re-authenticate to update your password.",
          "warning"
        );
      }
    } finally {
      setIsProcessing(false); // End processing
    }
  };

  return (
    <div className="text-Center" style={{ minHeight: "99.5vh" }}>
      <div className="form border parentform">
        <h4>Forgot Password</h4>
        <Form
          name="forgotpassword"
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit} // Use onFinish to handle form submission
          style={{
            maxWidth: 360,
          }}
        >
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to="/auth/changepassword">Change password</Link>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button
              block
              type="primary"
              loading={isProcessing}
              htmlType="submit" // Use htmlType="submit" for button
            >
              Forgot Password
            </Button>
            or <Link to="/auth/register">Register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Forgotpassword;
