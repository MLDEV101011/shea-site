import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .then(setName(""), setEmail(""), setMessage(""))
      .catch((error) => alert(error));
  }
  return (
    <div>
      <Header />
      <div className="px-5 py-10 justify-center flex sm:flex-nowrap flex-wrap-reverse text-gray-400 body-font w-full">
        <div className="w-full rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 h-96 md:h-full"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=jaser,+in&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="p-2 bg-gray-900 relative hidden md:flex flex-wrap py-5 rounded shadow-md">
            <div className="pl-0 lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-500">
                1234 Main St <br />
                Jasper, IN 47527
              </p>
            </div>
            <div className="pl-0 lg:w-1/2 px-5 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto: mlarson.dev@gmail.com"
                className="text-indigo-400 leading-relaxed"
              >
                shea@sheasesthetics.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a
                href="tel:15555555555"
                className="leading-relaxed text-gray-500"
              >
                555-555-5555
              </a>
            </div>
          </div>
        </div>
        <form
          netlify
          data-netlify="true"
          name="contact"
          onSubmit={handleSubmit}
          className="mb-10 lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-black text-sm:text-4xl text-3xl mb-1 font-medium title-font">
            CONTACT ME TODAY    
          </h2>
          <p className="leading-relaxed mb-5">
            Interested in working together? Send me a message and I'll get back
            to you as soon as possible.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
          <div className="flex flex-col lg:flex-row items-center w-full justify-center mt-5">
            <p className="text-gray-500 text-2xl md:mr-2">CLICK TO CALL ME AT </p>
              <a href="tel:15555555555" className="text-green-500 text-2xl">1-555-555-5555</a>
          </div>
          
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
