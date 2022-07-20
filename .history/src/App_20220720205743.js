import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
