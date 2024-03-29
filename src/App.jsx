import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes } from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import Trial from "./pages/Trial";
import Login from "./pages/Login";
import Register from "./pages/Register";
import useAuth from "./hooks/useAuth";
import Emailsent from "./pages/Emailsent";
import Emailverify from "./pages/Emailverify";

function App() {
  const { isLoading } = useAuth();
  const { user, authToken } = useSelector((state) => state.auth);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLoading ? null : user ? (
                <Navigate to="/home" replace={true} />
              ) : (
                <Trial />
              )
            }
          />
          <Route
            path="/login"
            element={
              isLoading ? null : user ? (
                <Navigate to="/home" replace={true} />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/register"
            element={
              isLoading ? null : user ? (
                <Navigate to="/home" replace={true} />
              ) : (
                <Register />
              )
            }
          />
          <Route path="/emai_verification" element={<Emailsent />} />
          <Route path="/auth/verify/:token" element={<Emailverify />} />
          <Route element={<ProtectedRoute user={user} authToken={authToken} />}>
            {privateRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
