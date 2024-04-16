import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import ErrPage from "./components/ErrPage";
import ProtectedRoutes from "./Services/ProtectedRoutes";
import ProtectedAdminRoute from "./Services/ProtectedAdminRoutes";
import Home from "./components/Home";
import Anonymous from "./Services/Anonymous";
import Anonymous2 from "./Services/Anonymous2";

import RegisteredUsers from "./components/RegisteredUsers";
// admin ko try gardai
import Admin from "./components/AdminComp/Admin";
function App() {
  return (
    //parent routing component 9820225792
    <BrowserRouter>
      {/* <Header />  ahile lai yo header band gareko  */}
      <Routes>
        <Route path="/admin" element={<ProtectedAdminRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        {/* logged user lai /register & /login bata roknu paryo ni  */}
        <Route element={<Anonymous />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<Anonymous2 />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        {/* error bala url haru lai ho  */}
        <Route path="*" element={<ErrPage />} />

        {/* protected routes  jati routes lai protect garnu xa sab lai yahi liera patkine */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
