function Navbar({ setShowLogin }) {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-orange-500 cursor-pointer"
            onClick={() => scrollTo("home")}>
          Coding Ninjas
        </h1>

        <ul className="flex gap-8 font-medium">

          <li
            onClick={() => scrollTo("home")}
            className="cursor-pointer hover:text-orange-500"
          >
            Home
          </li>

          <li
            onClick={() => scrollTo("courses")}
            className="cursor-pointer hover:text-orange-500"
          >
            Courses
          </li>

          <li
            onClick={() => scrollTo("placements")}
            className="cursor-pointer hover:text-orange-500"
          >
            Placements
          </li>

          <li
            onClick={() => scrollTo("reviews")}
            className="cursor-pointer hover:text-orange-500"
          >
            Reviews
          </li>

          <li
            onClick={() => scrollTo("contact")}
            className="cursor-pointer hover:text-orange-500"
          >
            Contact
          </li>

        </ul>

        <button
          onClick={() => setShowLogin(true)}
          className="bg-orange-500 text-white px-5 py-2 rounded-lg"
        >
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;