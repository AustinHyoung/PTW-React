import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  const testApi = async () => {
    try {
      const response = axios.get("http://localhost:8080/api/test");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    testApi();
  }, []);

  return (
    <>
      <div>123</div>
    </>
  );
};

export default App;
