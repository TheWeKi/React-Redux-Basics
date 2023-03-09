import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>

            <Routes>
                <Route path="/" element={
                    <Welcome/>
                }/>
                <Route path="/login" element={
                    <Login/>
                }/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
