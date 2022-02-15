
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import LoginForm from "./Components/LoginForm/LoginForm";
import Update from "./Components/UpdateForm/Update";
function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/LoginForm" exact element={<LoginForm />} />
            <Route path="/Update" exact element={<Update />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
