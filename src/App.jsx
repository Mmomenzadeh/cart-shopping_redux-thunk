import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
