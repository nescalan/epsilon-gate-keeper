import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes
import { Blogs } from "../pages/Blogs";
import { Contacts } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Layout } from "../pages/Layout";
import { NoPage } from "../pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
