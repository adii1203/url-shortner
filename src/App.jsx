import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes } from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import Trial from "./pages/Trial";
import Login from "./pages/Login";
import useAuth from "./hooks/useAuth";

function App() {
  useAuth();
  const { user, authToken } = useSelector((state) => state.auth);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/home" replace /> : <Trial />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/home" replace /> : <Login />}
          />
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
