function Stats() {
  const stats = [
    { number: "1.5L+", title: "Students Trained" },
    { number: "5000+", title: "Hiring Partners" },
    { number: "98%", title: "Placement Rate" },
    { number: "200+", title: "Expert Mentors" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Achievements
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <h1 className="text-4xl font-bold text-orange-500">
                {item.number}
              </h1>

              <p className="mt-3 text-gray-600">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;