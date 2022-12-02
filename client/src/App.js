import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegistrationPage } from "./pages/RegistrationPage.jsx";

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
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="register" element={<RegistrationPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Routes>
      </Layout>
      {!data ? "Loading..." : data}
    </div>
  );
}

export default App;
