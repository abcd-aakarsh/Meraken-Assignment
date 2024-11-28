import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
// import ProductDetail from "./pages/ProductDetail";
import PageNotFound from "./pages/PageNotFound";
import ProductCatalog from "./pages/ProductCatalog";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/products" />} />

          <Route path="products" element={<ProductCatalog />} />
          {/* <Route path="products/:slug" element={<ProductDetail />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
