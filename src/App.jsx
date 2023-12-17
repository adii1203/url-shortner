import { Login } from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trial from "./pages/Trial";
import Register from "./pages/Register";
import Emailsent from "./pages/auth/Emailsent";
import Auth from "./pages/auth/Auth";
import { ErrorFour } from "./pages/Error";
import VerifyEmail from "./pages/auth/VerifyEmail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorFour />} />
          <Route path="/" element={<Trial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
