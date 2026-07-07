function Contact() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-4xl font-bold text-center mb-8">
          Contact Us
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;