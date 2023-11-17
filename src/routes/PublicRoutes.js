import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import Layout from "../layouts";

const PublicRoutes = () => {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" name="home" element={<Home />} />
        </Route>
        <Route path="*" name="notFound" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
};

export default PublicRoutes;
