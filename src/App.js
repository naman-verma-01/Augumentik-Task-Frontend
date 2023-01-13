import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Admin from "./Pages/Admin"
import FormSocial from "./Pages/FormSocial"
import FormUpload from "./Pages/FormUpload"
import Signup from "./Pages/Signup"

function App() {
  
  const authStatus = useSelector((state) => state.user.authStatus);


  return (
   <>
   <BrowserRouter>
        <Routes>

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<> <Home /></>} />
          <Route
            exact
            path="/admin"
            element={
              <ProtectedRoute
                authStatus={authStatus}
                routeName="admin"
              >
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route exact path="/form/imageUpload" element={<FormUpload />} />
          <Route exact path="/form/changeSocial" element={<FormSocial />} />
          <Route
            exact
            path="/signup"
            element={
              <ProtectedRoute
                authStatus={authStatus}
                routeName="admin"
              >
                <Signup />
              </ProtectedRoute>
            }
          />
        </Routes>

      </BrowserRouter>
   </>
  );
}

const ProtectedRoute = ({ authStatus, children }) => {
  console.log(
    "AUTH_STATUS ====>>>>>>>>>>>>>>>>>>>>",
    authStatus
  );

  if (!authStatus) {
    return <Navigate to="/login" replace />;
  }
  else  {
    return children;
  }
  
};


export default App;
