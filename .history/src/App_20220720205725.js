
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNewClient from "./components/AddNewClient";
import AddNewInquiry from "./components/AddNewInquiry";
import ClientList from "./components/ClientList";
import Clients from "./components/Clients";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import Inquiries from "./components/Inquiries";
import Login from "./components/Login";
import MyInquiries from "./components/MyInquiries";
import MyProfile from "./components/MyProfile";
import Notifications from "./components/Notifications";
import Splash from "./components/Splash";
import "./scss/index.scss";
import ClientInfo from "./components/ClientInfo";
import MainClientInfo from "./components/MainClientInfo";
import ChangePassword from "./components/ChangePassword";

const  App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inquiries" element={<Inquiries />} />
          <Route path="/my-inquiries" element={<MyInquiries />} />
          <Route path="/add-new-inquiry" element={<AddNewInquiry />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/client-list" element={<ClientList />} />
          <Route path="/add-new-client" element={<AddNewClient />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/clientinfo" element={<ClientInfo />} />
          <Route path="/mainclientinfo" element={<MainClientInfo />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
