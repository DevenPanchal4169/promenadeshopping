import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import index from "../src/"

const  App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
