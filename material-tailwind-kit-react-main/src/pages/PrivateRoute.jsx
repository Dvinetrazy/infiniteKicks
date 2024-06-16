import { Route, Navigate } from "react-router-dom";
import React from 'react';

export function PrivateRoute({ path, element, isLoggedIn }) {
  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/sign-in" replace />
  );
}

export default PrivateRoute;
