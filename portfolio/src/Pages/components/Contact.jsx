import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {toast, ToastContainer} from 'react-toastify';
import { Github, Linkedin, Mail, Phone } from "lucide-react";



const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_6rocgxi",  // Replace with your EmailJS Service ID
        "template_04b3cis",  // Replace with your EmailJS Template ID
        formRef.current,
        "9Q7781wOE8J6W0B5Y"    // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setMessage("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
          setTimeout(() => {
            setMessage("");
          }, 2000);
          
        },
        (error) => {
          console.error("Error:", error.text);
          setMessage("Failed to send message. Please try again.");
          setLoading(false);
          setTimeout(() => {
            setMessage("");
          }, 2000);
        }
      );
  };

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Get In Touch
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-300">
                <Mail className="text-purple-400" />
                sumitkumar210711@gmail.com
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <Phone className="text-purple-400" />
                +91-9012453938
              </p>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-white">Social Links</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sumitkumar210711"
                className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-purple-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sumit-kumar-4a2627311/"
                className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-purple-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-8 py-4 rounded-lg font-medium transition-all ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            } text-white shadow-lg hover:shadow-purple-500/25`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {message && <p className="text-center text-gray-300 mt-4">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
