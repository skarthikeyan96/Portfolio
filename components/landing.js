import React from "react";

const Landing = () => {
  return (
    <div
      className="text-black m-4 min-h-full font-mulish"
      style={{ backgroundColor: "#f9efe7" }}
    >
      <header>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <span className="ml-3 text-xl font-bold">Karthik</span>
          </a>
        </div>
      </header>
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 pl-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className="title-font sm:text-4xl text-3xl mb-4 font-abril"
              style={{ fontSize: "7vh", lineHeight: "130%", fontWeight: "400" }}
            >
              Hi,
              <br /> I'm Karthikeyan ,
              <br /> Web developer
            </h1>
            <p className="mb-8 leading-relaxed"> </p>
            <div className="flex justify-center">
              <a
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
                href="#projects"
              >
                See My Work
              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/coding.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
