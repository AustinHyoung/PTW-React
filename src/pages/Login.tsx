import React, { useEffect } from "react";
import axios from "axios";
import LoginComponent from "../components/LoginComponent";

const Login = () => {
  const testApi = async () => {
    try {
      const response = await axios.get("http://localhost:8080/apis/user");
      console.log(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    testApi();
  }, []);

  return (
    <>
      <LoginComponent />
    </>
  );
};

export default Login;
