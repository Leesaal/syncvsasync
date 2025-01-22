import { useState } from "react";

import { Box, Button, Stack, Typography } from "@mui/material";

import "./App.css";

function App() {
  const [asyncResponse, setAsyncResponse] = useState("");
  const [syncResponse, setSyncResponse] = useState("");

  const onSyncClick = () => {
    const request = new XMLHttpRequest();

    // the below api fetch is just to show a fetch that takes a while to return a response so we can see the effect on the webpage when we are awaiting a synchronous request response.  You can comment out the http request and still see a quick delay where you can't interact with the screen.
    request.open("GET", "https://httpbin.org/delay/5", false); // 5-second delay in response to mimic the fetch taking time
    request.send(null);

    request.open("GET", "https://pokefacts.vercel.app/", false);
    request.send(null);
    setSyncResponse(JSON.parse(request.responseText).data);
  };

  const onAsyncClick = async () => {
    // fetch only works asynchronously
    fetch("https://pokefacts.vercel.app/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        return setAsyncResponse(data.data);
      });
  };

  return (
    <>
      {/* Heading */}
      <h1>Synchronous vs Asynchronous</h1>

      {/* Fetch buttons and responses */}
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}
      >
        <Button variant="contained" onClick={onSyncClick}>
          Synchronous
        </Button>
        <Button variant="contained" onClick={onAsyncClick}>
          Asynchronous
        </Button>
        <h4>Sync Response:</h4>
        <h4>Async Response:</h4>
        <Typography>{syncResponse ? syncResponse : ""}</Typography>
        <Typography>{asyncResponse ? asyncResponse : ""}</Typography>
      </Box>

      {/* Interaction test */}
      <Stack margin={10} direction="column">
        <Typography>Try typing here during a request...</Typography>
        <input placeholder="Type something here..."></input>
      </Stack>
      {/* Footer */}
      <Box>by leesaal w/ 💛</Box>
    </>
  );
}

export default App;
