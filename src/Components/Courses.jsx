function Courses({ setSelectedCourse }) {
  const courses = [
    {
      title: "Web Development",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
      duration: "6 Months",
    },
    {
      title: "React Development",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500",
      duration: "4 Months",
    },
    {
      title: "Python Programming",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500",
      duration: "5 Months",
    },
    {
      title: "Java Programming",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
      duration: "6 Months",
    },
    {
      title: "Data Analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      duration: "5 Months",
    },
    {
      title: "Artificial Intelligence",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500",
      duration: "8 Months",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Popular Courses
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">{course.title}</h3>

              <p className="text-gray-500 mt-2">
                Duration: {course.duration}
              </p>

              <button
                onClick={() => setSelectedCourse(course.title)}
                className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition"
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;