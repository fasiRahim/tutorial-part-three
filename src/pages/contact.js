import React from "react"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
    <div>
      <h3>Contact Form</h3>
        <form>
        <input type="text" class="form-control" id="name"  placeholder="Name" />
        <br/><br/>

        <input type="email" class="form-control" id="email" placeholder="Email" />
        <br /> <br />
        <textarea class="form-control" id="message" rows="3" placeholder="Message"></textarea>
        <br/><br/>
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
 

      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </div>
    </Layout>
  )
}