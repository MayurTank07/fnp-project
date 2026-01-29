import React from "react";

const Contact = () => {


  const handleSubmit = (e) => {
    e.preventDefault();  // no reload when form submission
  }


  return (
    <div className="w-full bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-pink-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a question, feedback, or need help with your order?
          We’re here to help you every step of the way 🌸
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Reach out to us for any queries related to orders, delivery,
              corporate gifting, or general support.
            </p>

            <div className="space-y-5">
              <div>
                <h4 className="font-semibold">📍 Address</h4>
                <p className="text-gray-600">
                  FNP Headquarters, New Delhi, India - 01
                </p>
              </div>

              <div>
                <h4 className="font-semibold">📞 Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>

              <div>
                <h4 className="font-semibold">📧 Email</h4>
                <p className="text-gray-600">support@fnp.com</p>
              </div>

              <div>
                <h4 className="font-semibold">🕒 Working Hours</h4>
                <p className="text-gray-600">
                  Monday – Sunday : 9:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>

              <button
                type="submit"

                className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
              >
                Submit Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full h-[350px]">
        {/* <iframe
          title="FNP Location"
          src="https://www.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe> */}

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.70543813029!2d72.93724410000002!3d19.164367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b949b1859759%3A0xacce820ed3669c0b!2sStarX%20Innovations%20and%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1769677502789!5m2!1sen!2sin"
            loading="lazy"
            className="w-full h-full border-0" >
        </iframe>
        
      </section>

    </div>
  );
};

export default Contact;
