import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "../src/component/Index"
import L from "../src/component/Index"
import '../src/App.css'

const  App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
