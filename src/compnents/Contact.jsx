import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
// import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Contact = () => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     description: "",
  //   });

  //   const [state, handleSubmit] = useForm("moveannq");
  //   if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  //   }

  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form Submitted", formData);
  //   };

  const contactReff = useRef(false);
  return (
    <div>
      <section className="py-16" ref={contactReff} id="contact">
        <div className="px-4 text-center">
          <h2 className="mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
        </div>

        {/* Form */}
        <div className="contact-form max-w-lg mx-auto p-6 bg-[#241E2B] shadow-lg rounded-xl mt-10 text-white">
          <h2 className="text-2xl font-semibold mb-4 text-white">Contact Me</h2>
          <form
            action="https://formspree.io/f/moveannq"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block mb-1 text-white">Name</label>
              <input
                type="text"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
                placeholder="Enter Name"
                className="w-full px-4 py-2 border border-gray-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Email</label>
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                placeholder="Enter Email"
                className="w-full px-4 py-2 border border-gray-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Subject</label>
              <input
                type="text"
                name="subject"
                // value={formData.subject}
                // onChange={handleChange}
                placeholder="Enter Subject"
                className="w-full px-4 py-2 border border-gray-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Description</label>
              <textarea
                name="description"
                // value={formData.description}
                // onChange={handleChange}
                placeholder="Enter Description"
                className="w-full px-4 py-2 border border-gray-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <p className="mb-4 mt-20 text-center text-lg lg:text-xl">
            Feel free to reach out to me via email:{" "}
            <a href="mailto:sanjaykanwasi3@gmail.com" className="border-b">
              {" "}
              sanjaykanwasi3@gmail.com
            </a>
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="http://www.linkedin.com/in/sanjay-singh-kanwasi-057177200"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 block contact-icon"
              style={{ pointerEvents: "auto" }}
              aria-label="Visit my LinkedIn profile"
            >
              <RiLinkedinBoxFill className="text-3xl" />
            </a>
            <a
              href="https://github.com/Sanjaykanwasi"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 block contact-icon"
              style={{ pointerEvents: "auto" }}
              aria-label="Visit my Github profile"
            >
              <RiGithubFill className="text-3xl" />
            </a>
          </div>
        </div>
      </section>
      <footer>
        <p className="text-center mb-5 ">
          © 2025. Designed & Developed by Sanjay Singk Kanwasi❤️
        </p>
      </footer>
    </div>
  );
};

export default Contact;
