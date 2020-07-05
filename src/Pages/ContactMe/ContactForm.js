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
      Your Name:{" "}
      <input
      type="text"
      name="name"
      placeholder="John/Jane Doe"
      value={name}
      onChange={this.handleChange}
      />
      </label>
      <label>
      Your Email:{" "}
      <input
      type="email"
      name="email"
      placeholder="email@email.com"
      value={email}
      onChange={this.handleChange}
      />
      </label>
      </p>
      <p>
      <label className="message">
      Message:
      <textarea
      name="message"
      value={message}
      placeholder="Write me a message and I'll get back to you as soon as possible!"
      onChange={this.handleChange}
      />
      </label>
      </p>
      <p>
      <button type="submit">Send</button>
      </p>
      </form>
      </div>
      </section>
      );
    }
  }
  export default ContactForm;
  