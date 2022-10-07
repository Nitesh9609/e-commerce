import React, { useState } from "react";
import "./Note.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { height } from "@mui/system";
const Note = () => {
  const [note, setNote] = useState(true);

  return (
    <div className="note-full">
      <div className="note">
        {note && (
          <Stack
            sx={{
              width: "50%",
              position: "absolute",
              top:'5%',
              left: "50%",
              transform: "translate(-50%)",
            
              
            }}
            spacing={2}
          >
            <Alert
            
              variant="filled"
              severity="error"
              onClose={() => setNote(false)}
            >
              <AlertTitle>Warning</AlertTitle>
              PLEASE VIEW THIS SITE IN LARGE DISPLAY SCREEN ONLY ........ SMALL
              DEVICE VIEW IS UNDER DEVELOPMENT !!!!!!!!!!!!!!!!!!
            </Alert>
          </Stack>
        )}
      </div>
    </div>
  );
};

export default Note;
