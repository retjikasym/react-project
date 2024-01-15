import { Routes, Route,  } from "react-router-dom";
import Layout from "./compononents/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Product from "./pages/Product/Product";
import "./App.css";

export default function App() {
  // const { category, id } = useParams();
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Product" element={<Product />}></Route>
        </Route>
      </Routes>
    </>
  );
}
