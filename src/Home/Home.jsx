import React from "react";
import { Button} from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Button component={Link} to="/projects">
        Click Me
      </Button>
    </>
  )
}
export default Home;