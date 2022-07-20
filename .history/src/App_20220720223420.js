import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "../src/component/Index"
import Layout from "../src/component/Layout"
import '../src/App.css'

const  App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout content={<INdex/>} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
