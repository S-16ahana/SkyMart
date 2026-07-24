import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="h-screen bg-black">
  
      <AppRoutes />
    </div>
  );
};

export default App;
