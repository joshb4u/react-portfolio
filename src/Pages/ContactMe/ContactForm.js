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
      Email ID 1 : joshbabugeorge@gmail.com
      </label>
      </p>
      <p>
      <label>
      Email ID 2 : joshbabugeorge@cmail.carleton.ca
      </label>
      </p>
      <p>
      <label>
      Email ID 3: joshb4u@gmail.com
      </label>
      </p>
      <p>
      <label>
      Location: Ottawa, Canada
      </label>
      </p>
      <p>
      <a href="https://github.com/joshb4u" className="nav-link" target="_blank" >Click here to see my Github Repostories!</a>
      </p>
      <p>
      <a href="https://www.linkedin.com/in/josh-george-237b7b1a1/" className="nav-link" target="_blank" >Click here to see my LinkedIn Profile!</a>
      </p>
      <p>
      <a href="https://drive.google.com/file/d/1U8i6eqBAFjxOsbtf8fS_j8FaRy2qZk7q/view?usp=sharing" className="nav-link" target="_blank" >Click here to see my Resume!</a>
      </p>
      </form>
      </div>
      </section>
      );
    }
  }
  export default ContactForm;
  