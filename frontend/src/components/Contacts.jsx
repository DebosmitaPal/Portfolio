import React, { useState } from "react";
import iconpointing from "../assets/iconpointing.webp";

function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const url=import.meta.env.VITE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/contact" || url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
        }); // reset form
      } else {
        setStatus("Failed to send, please try again later.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Illustration */}
        <div className="flex justify-center">
          <img src={iconpointing} alt="Contact Illustration" className="w-96 h-auto" />
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h2 className="text-5xl font-bold mb-8 font-serif text-yellow-500">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-3 bg-black border-2 border-yellow-600 rounded-lg focus:bg-yellow-300/70 focus:text-black outline-none"
                required
              />
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 bg-black border-2 border-yellow-600 rounded-lg focus:bg-yellow-300/70 focus:text-black outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-black border-2 border-yellow-600 rounded-lg focus:bg-yellow-300/70 focus:text-black outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone No."
                className="w-full px-4 py-3 bg-black border-2 border-yellow-600 rounded-lg focus:bg-yellow-300/70 focus:text-black outline-none"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-3 bg-black border-2 border-yellow-600 rounded-lg focus:bg-yellow-300/70 focus:text-black outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-orange-950 to-yellow-600 rounded-lg font-semibold text-white hover:opacity-90 transition"
            >
              Send
            </button>

            {status && <p className="mt-4 text-yellow-400">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
