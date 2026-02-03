import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers for phone
    if (name === "phone") {
      const numOnly = value.replace(/[^0-9]/g, '');
      setFormData({ ...formData, phone: numOnly });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullNumber = `${formData.countryCode}${formData.phone}`;

    const payload = {
      name: formData.name,
      whatsapp: fullNumber,
      message: formData.message,
    };

    try {
      await axios.post(`${apiUrl}/api/messages/`, payload);

      toast.success("Message sent successfully!");

      setFormData({
        name: '',
        countryCode: '+91',
        phone: '',
        message: '',
      });

    } catch (error) {
      toast.error("Error sending message. Try again later.");
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <ToastContainer />
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />

          {/* Country Code + WhatsApp */}
          <div className="flex gap-2 mb-4">

            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded w-20 bg-white"
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+971">+971 (UAE)</option>
              <option value="+94">+94 (Sri Lanka)</option>
              <option value="+880">+880 (Bangladesh)</option>
            </select>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="WhatsApp Number"
              className="flex-1 p-3 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            rows="5"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-animated-gradient text-white p-3 rounded hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;