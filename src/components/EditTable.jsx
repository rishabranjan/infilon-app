import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [fname, setFName] = React.useState(props.data.first_name);
  const [lname, setLName] = React.useState(props.data.last_name);
  const [email, setEmail] = React.useState(props.data.email);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.id === "fname") {
      setFName(e.target.value);
    }
    if (e.target.id === "lname") {
      setLName(e.target.value);
    }
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    console.log(fname);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            id="fname"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            value={fname}
            onChange={handleChange}
          />
          <TextField
            required
            margin="dense"
            id="lname"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            value={lname}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            required
            value={email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              props.handleSubmit(props.data.id, { fname, lname, email });
              handleClose();
            }}
          >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
