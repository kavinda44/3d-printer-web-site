// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "./Contact.css";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_cn114o6",
//         "template_5hnd8ii",
//         form.current,
//         "Y3VlYym4mCG-QgGRi"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="styled-contact-form">
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="to_name" />
//         <label>Email</label>
//         <input type="email" name="from_name" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     </div>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import conT from "./conT.jpg"



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cn114o6",
        "template_5hnd8ii",
        form.current,
        "Y3VlYym4mCG-QgGRi"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Container">
        <div className="image-container">
        <img className="con" src={conT} alt=""/>
      </div>
    <div className="wrapper">
       
      <div className="form-box">
        <form ref={form} onSubmit={sendEmail}>
          <h1>Contact Us</h1>
          <div className="input-box">
            <input type="text" name="to_name" placeholder="Name" />
          </div>
          <div className="input-box">
            <input type="email" name="from_name" placeholder="Email" />
          </div>
          <div className="input-box">
            <textarea name="message" placeholder="Message" />
          </div>
          <button type="submit">Send</button>
          <div className="register-link">
            <p>
              <a href="/">Back to Home</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;


