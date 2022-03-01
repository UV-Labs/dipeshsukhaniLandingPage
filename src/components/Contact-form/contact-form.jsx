import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  message: '',
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  alert(JSON.stringify(values, null, 2));
                  // show message

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. I will contact you soon.";
                  // Reset the values
                  values.name = "";
                  values.email = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = ''
                  }, 2000)
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                   
                    <div style={{display: 'flex'}}>
                   
                   

                    <button type="submit" className="butn bord">
                    <span><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPkdwKhjQZntsMQGpXNzgkcszgtHdxxcKGknxBRLVVxfSKchCKpkfQBPkPtxCGkSmLsBCQ">Block a Call</a></span>  
                                  
                    </button>
                    </div>
                  </Form>
                  
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{ContactFromDate.email}</a>
                </h5>
                {/* <h5>{ContactFromDate.phone}</h5> */}
              </div>
              {/* <h3 className="wow" data-splitting>
                Visit Us.
              </h3> */}
              <div className="item">
                {/* <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6> */}
              </div>
              <div className="social mt-50">
                <a target="_blank" rel="noreferrer" href="https://github.com/amateur-dev" className="icon">
                  <i className="fab fa-github"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/amateurdev2" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dipeshsukhani/" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://t.me/dipesh_dev" className="icon">
                  <i className="fab fa-telegram"></i>
                </a>
                {/* <a href="#0" className="icon">
                  <i className="fab fa-google"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
