import { Login } from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Emailsent from "./pages/auth/Emailsent";
import Auth from "./pages/auth/Auth";
import { ErrorFour } from "./pages/Error";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Home from "./pages/Home";
import SecureRoute from "./components/SecureRoute";
import PublicRoutes from "./components/PublicRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorFour />} />

          {/* SecureRoute : only accessable after login */}

          <Route path="/" element={<SecureRoute />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* PublicRoutes : only accessable without login */}

          <Route path="/" element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/auth" element={<Auth />}>
              <Route path="verify/:id" element={<Emailsent />} />
              <Route path="verify-email" element={<VerifyEmail />} />
              <Route path="resetpassword" element={<div></div>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
