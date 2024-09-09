import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import CreateModel from "./component/CreateModel";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<CreateModel/>}/>
      </Routes>
    </Router>
  );
}

export default App;
