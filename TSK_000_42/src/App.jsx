import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useContext } from "react";
import Error from "./pages/Error";
import { UserContext } from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={user ? <Profile /> : <Error />} />
      </Routes>
    </>
  );
}

export default App;
