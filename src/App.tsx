import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    try {
      const response = axios.get("/hello");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <div>hihiihi</div>
    </>
  );
};

export default App;
