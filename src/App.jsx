import { Login } from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trial from "./pages/Trial";
import Register from "./pages/Register";
import Emailsend from "./pages/auth/Emailsend";
import Auth from "./pages/auth/Auth";
import { ErrorFour } from "./pages/Error";

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
            <Route path="verify/:id" element={<Emailsend />} />
            <Route path="verify-email" element={<div></div>} />
            <Route path="resetpassword" element={<div>reset password</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
