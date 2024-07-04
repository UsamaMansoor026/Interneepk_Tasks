import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useContext } from "react";
import Access from "./components/Access";
import Error from "./components/Error";

function App() {
  const user = useContext("UserContext");
  const setUser = useContext("UserContext");
  setUser(true);
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/access" element={user ? <Access /> : <Error />} />
      </Routes>
    </>
  );
}

export default App;
