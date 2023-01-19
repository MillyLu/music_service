/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { Routes, Route } from "react-router-dom";
import { Login } from "./components/pages/login";
import { MainPage } from "./components/pages/main";
import { Register } from "./components/pages/register";
import { ProtectedRoute } from "./components/protected-route/protected-route";



export function AppRoutes ({ user })  {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
        path="/*"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <MainPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};