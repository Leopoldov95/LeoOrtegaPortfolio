import "./styles/Contact.scss";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import VisibilitySensor from "react-visibility-sensor-v2";

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
  const [visibility, setVisibility] = useState(false);
  const [hasActivated, setHasActivated] = useState(false);
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isMessageInvalid, setIsMessageInvalid] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nameValidation = () => {
    if (formData.name === "") {
      return setIsNameInvalid(true);
    }
    setIsNameInvalid(false);
  };

  const emailValidation = () => {
    if (/.+@.+\..+/.test(formData.email) === false) {
      return setIsEmailInvalid(true);
    }
    setIsEmailInvalid(false);
  };

  const messageValidation = () => {
    if (formData.message === "") {
      return setIsMessageInvalid(true);
    }
    setIsMessageInvalid(false);
  };

  const handleFormSubmit = (e) => {
    /* e.preventDefault(); */
    nameValidation();
    emailValidation();
    messageValidation();
    // if all validations are checked, then submit the form
  };
  return (
    <div className="Contact">
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible) => {
          setVisibility(isVisible);
          if (isVisible) {
            setHasActivated(true);
          }
        }}
      >
        <>
          <h1
            style={{
              transform:
                visibility || hasActivated
                  ? "translateY(0)"
                  : "translateY(50px)",
              opacity: visibility || hasActivated ? 1 : 0,
              transition: "all 400ms linear",
            }}
          >
            Get In Touch
          </h1>
          <form
            className={classes.root}
            name="contact"
            method="post"
            style={{
              transform:
                visibility || hasActivated
                  ? "translateY(0)"
                  : "translateY(50px)",
              opacity: visibility || hasActivated ? 1 : 0,
              transition: "all 400ms linear",
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <TextField
              required
              autoComplete="new-password"
              label="Name"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              onChange={handleChange}
              name="name"
              error={isNameInvalid}
              helperText={isNameInvalid && "Please Enter Your Name"}
            />
            <TextField
              required
              autoComplete="new-password"
              label="Email"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              onChange={handleChange}
              name="email"
              error={isEmailInvalid}
              helperText={isEmailInvalid && "Please Enter a Valid Email"}
            />
            <TextField
              autoComplete="new-password"
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
              label="Message"
              multiline
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              onChange={handleChange}
              name="message"
              error={isMessageInvalid}
              helperText={isMessageInvalid && "Please Provide a Message"}
            />
            <button onClick={handleFormSubmit} className="btn-primary">
              Send Message
            </button>
          </form>
          <footer>
            <p>
              You can also connect with me by clicking on my social media
              profiles.
            </p>
            <p>
              Or Emailing me at{" "}
              <a
                className="primary-color"
                href="mailto:leopoldoortegav@gmail.com"
              >
                leopoldoortegav@gmail.com
              </a>
            </p>
          </footer>
        </>
      </VisibilitySensor>
    </div>
  );
};

export default Contact;
