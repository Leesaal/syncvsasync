import React, { useState } from "react";

import { Box, Button, Divider, Stack } from "@mui/material";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Synchronous vs Asynchronous</h1>
      <Box margin={5} className="card">
        <Button variant="contained">Synchronous</Button>
        <Divider sx={{ m: 2, bgcolor: "white" }} />
        <Button variant="contained">Asynchronous</Button>
      </Box>
      <Box margin={10}>
        <p className="read-the-docs">
          Use the below buttons to test page interactions during the different
          fetches
        </p>

        <p>Count = {count}</p>
        <Stack direction="row" justifyContent={"space-around"}>
          <Button
            onClick={() => {
              setCount((count) => count + 1);
            }}
            variant="outlined"
          >
            Increase count
          </Button>
          <Button
            onClick={() => {
              setCount((count) => count - 1);
            }}
            variant="outlined"
          >
            Decrease count
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default App;
