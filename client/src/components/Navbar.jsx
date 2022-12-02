import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const Navbar = () => {
  const isAuth = false;

  const activeStyles = {
    color: "#ffffff",
    opacity: "0.5",
  };

  return (
    <div>
      {isAuth && (
        <ul>
          <li>
            <NavLink
              to={"/"}
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Home
            </NavLink>
          </li>
        </ul>
      )}

      <div className="flex justify-center items-center bg-black text-xs text-white rounded-sm px-4 py-2 ">
        {isAuth ? (
          <button>Log out</button>
        ) : (
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              <Link to={"login"}>Log in</Link>
            </Button>
          </ThemeProvider>
        )}
      </div>
    </div>
  );
};

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#1976d2",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});
