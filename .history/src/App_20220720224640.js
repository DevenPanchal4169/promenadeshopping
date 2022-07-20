import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../src/component/Layout"
import Index from "../src/component/Index"
import About from "../src/component/About"
import Contact from "../src/component/Contact"
import '../src/App.css'

const  App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout content={<Index/>} />} />
          <Route path="/about" element={<Layout content={<About/>} />} />
          <Route path="/મontact" element={<Layout content={<About/>} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
