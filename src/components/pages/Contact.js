import './styles/Contact.scss'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <div className="Contact">
      <h1>Get In Touch</h1>
      <form className={classes.root}>
      <TextField
          id="standard-full-width"
          label="Name"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
        />
      <TextField
          id="standard-full-width"
          label="Email"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
        />
      <TextField
          id="standard-full-width"
          label="Subject"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
        />
      <TextField
          id="standard-full-width"
          label="Message"
          multiline
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
        />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
