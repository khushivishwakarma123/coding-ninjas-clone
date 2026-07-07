import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");


  return (
    <>
      <Navbar setShowLogin={setShowLogin} />

      <div id="home">
        <Hero />
      </div>

      <div id="courses">
  <Courses setSelectedCourse={setSelectedCourse} />
</div>

      <div id="placements">
        <Companies />
      </div>

      <div id="reviews">
        <Testimonials />
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* Login Popup */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl w-96">
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            <input
              type="email"
              placeholder="Email"
              className="border w-full p-3 rounded mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="border w-full p-3 rounded mb-4"
            />

            <button className="bg-orange-500 text-white w-full py-3 rounded">
              Login
            </button>

            <button
              onClick={() => setShowLogin(false)}
              className="mt-4 border w-full py-3 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Enroll Popup */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl w-96">
            <h2 className="text-2xl font-bold mb-4">
              Enroll in {selectedCourse}
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="border w-full p-3 rounded mb-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border w-full p-3 rounded mb-4"
            />

            <button className="bg-orange-500 text-white w-full py-3 rounded">
              Submit
            </button>

            <button
              onClick={() => setSelectedCourse("")}
              className="mt-4 border w-full py-3 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;