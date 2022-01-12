import React from "react";
import "./style.css";

const encode = (data) => {
  return Object.keys(data)
  .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  .join("&");
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }
  
  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
    .then(() => alert("Success!"))
    .catch((error) => alert(error));
    
    e.preventDefault();
  };
  
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
  render() {
    const { name, email, message } = this.state;
    return (
      <section className="container col-10">
      <div className="contact-me">
      <h5>Contact Me!</h5>
      <form onSubmit={this.handleSubmit}>
      <p>
      <label>
      joshbabugeorge@gmail.com
      </label>
      <label>
      joshbabugeorge@cmail.carleton.ca
      </label>
      </p>
      <p>
      <label>
      joshb4u@gmail.com
      </label>
      </p>
      </form>
      </div>
      </section>
      );
    }
  }
  export default ContactForm;
  