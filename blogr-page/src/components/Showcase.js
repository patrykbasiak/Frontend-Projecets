import bg from "../images//bg-pattern-intro.svg";

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="overlay px-5 flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-4xl text-white mb-5 md:text-5xl xl:text-6xl 2xl: 7xl">
          A modern publishing platform
        </h1>
        <p className="text-white">
          Grow your audience and build your online brand
        </p>
        <ul className="flex items-center">
          <li className="mx-1 my-5">
            <button className="btn-light white bg-white py-2 px-4 rounded-full">
              Start for Free
            </button>
          </li>
          <li>
            <button className="border border-white py-2 px-4 rounded-full text-white">
              Learn More
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Showcase;
