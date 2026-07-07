function Hero() {
  return (
    <section className="bg-orange-50 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-8">

        <div>

          <h1 className="text-6xl font-bold leading-tight">
            Learn Coding
            <br />
            From India's
            <span className="text-orange-500">
              {" "}Best Platform
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Learn from industry experts with live classes,
            projects and placement support.
          </p>

          <button
  onClick={() =>
    document.getElementById("courses").scrollIntoView({
      behavior: "smooth",
    })
  }
  className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl"
>
  Explore Courses
</button>

        </div>

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
          className="rounded-3xl shadow-xl"
        />

      </div>

    </section>
  );
}

export default Hero;