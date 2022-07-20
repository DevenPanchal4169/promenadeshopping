import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import index from "../src/component/index"

const  App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<index />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
