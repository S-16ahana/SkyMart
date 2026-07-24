import { Routes, Route } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { Toaster, toast } from "react-hot-toast";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";

const AppRoutes = () => {
  return (
    <div>
        <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Login />} />
    
    </Routes>

        <Toaster position="top-right" />
    </div>
  
  );
};

export default AppRoutes;