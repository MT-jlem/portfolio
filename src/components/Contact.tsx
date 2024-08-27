import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-8 py-12 px-6 md:py-16 lg:px-24"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl underline">
          Contact
        </h2>
      </div>
      <div className="text-center max-w-screen-lg px-8">
        <p className="text-gray-600 md:text-lg lg:text-xl">
          I would love to hear from you! Whether you have a question, a project
          idea, or just want to say hello, feel free to get in touch using the
          form below.
        </p>
      </div>
      <form className="w-full max-w-lg">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
            rows={5}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
