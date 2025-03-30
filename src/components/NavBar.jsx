import { AppBar, Toolbar, Button, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{ textDecoration: "none", color: "white", fontWeight: "900" }} to="/">NOZ</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;