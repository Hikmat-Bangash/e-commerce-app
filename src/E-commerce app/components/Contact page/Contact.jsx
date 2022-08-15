import { height } from "@mui/system";
import React from "react";
import './Contctpage.css'
const Contact = () => {
  return (
    <>

      <div class="form4 top">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-7 col-md-offset-2">
              <div class="form-bg">
                <form class="form">
                  <div class="form-group">
                    
                    <label class="sr-only">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      required=""
                      id="nameNine"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="form-group">
                    
                    <label class="sr-only">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      required=""
                      id="emailNine"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="form-group">
                    
                    <label class="sr-only">Name</label>
                    <textarea
                      class="form-control"
                      required=""
                      rows="7"
                      id="messageNine"
                      placeholder="Write message"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn submt text-center btn-blue">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
