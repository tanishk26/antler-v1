import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>

              <Route exact path='/' element={<PrivateRoute />}>
                <Route exact path='/' element={<Login />} />
              </Route>

              <Route path='/signup' element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>

          </AuthProvider>

        </Router>
        {/* <Signup /> */}
      </div>
    </Container>

  )
}

export default App;


// <Route element={<PrivateRoute />}>
//   <Route exact path="/" element={<Dashboard />} />
//   <Route path="/login" element={<Login />} />
// </Route>

{/* <Route exact path='/' element={<PrivateRoute />}>
                <Route exact path='/' element={<Login />} />
              </Route> */}
{/* <PrivateRoute exact path="/" element={<Dashboard />} /> */ }
{/* <Route exact path="/" element={<Dashboard />} /> */ }