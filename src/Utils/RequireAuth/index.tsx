/* eslint-disable max-len */
import * as React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RequireAuth({ children }: { children: any }) {
  const [cookies] = useCookies(["user"]);

  if (cookies.user === undefined) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default RequireAuth;
