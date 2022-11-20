import React, { useState, useEffect } from "react";
import "antd/dist/reset.css";
import "./App.css";
import { Layout, Button } from "antd";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((res) => setData(res.message));
  }, []);

  return (
    <div className="App">
      <Layout>
        <Button type="primary">Test</Button>
      </Layout>
      {!data ? "Loading..." : data}
    </div>
  );
}

export default App;
