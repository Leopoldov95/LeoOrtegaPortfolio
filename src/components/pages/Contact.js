import "./styles/Contact.scss";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));
const Contact = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Contact">
      <h1>Get In Touch</h1>
      <form className={classes.root}>
        <TextField
          required
          autoComplete="new-password"
          id="standard-full-width"
          label="Name"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          onChange={handleChange}
          name="name"
        />
        <TextField
          required
          autoComplete="new-password"
          id="standard-full-width"
          label="Email"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          onChange={handleChange}
          name="email"
        />
        <TextField
          autoComplete="new-password"
          id="standard-full-width"
          label="Subject"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          onChange={handleChange}
          name="subject"
        />
        <TextField
          required
          autoComplete="new-password"
          id="standard-full-width"
          label="Message"
          multiline
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          onChange={handleChange}
          name="message"
        />
        <button onClick={handleFormSubmit} className="btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
