import { Routes, Route } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { Toaster, toast } from "react-hot-toast";

const AppRoutes = () => {
  return (
    <div>
        <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    
    </Routes>

        <Toaster position="top-right" />
    </div>
  
  );
};

export default AppRoutes;