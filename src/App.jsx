import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
