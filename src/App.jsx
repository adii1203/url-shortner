import { Login } from "./pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Trial from "./pages/Trial";
import Register from "./pages/Register";
import Emailsent from "./pages/auth/Emailsent";
import Auth from "./pages/auth/Auth";
import { ErrorFour } from "./pages/Error";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

function App() {
  const { status } = useSelector((state) => state.user);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorFour />} />
          <Route path="/" element={<Trial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              status ? <Home /> : <Navigate to={"/login"} replace={true} />
            }
          />
          <Route path="/user/auth" element={<Auth />}>
            <Route path="verify/:id" element={<Emailsent />} />
            <Route path="verify-email" element={<VerifyEmail />} />
            <Route path="resetpassword" element={<div></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
