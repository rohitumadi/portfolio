function Homepage() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-0  ">
        <div className="col-span-1 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl font-extrabold  sm:text-5xl ">
            <span className=" bg-gradient-to-r from-cyan-600 to-teal-400 bg-clip-text text-transparent">
              Hi, I am Rohit Umadi
            </span>
          </h1>
          <p className="mb-5 text-base text-gray-300 sm:text-lg lg:text-xl">
            A passionate Front end engineer
            <span className="block">
              With an experience in Fullstack engineering.
            </span>
          </p>
          <button className="w-full rounded-lg bg-gradient-to-r from-cyan-600 to-teal-400  px-6 py-3  sm:w-fit">
            Download CV
          </button>
        </div>
        <div className="col-span-1 mt-10  place-self-center md:mt-0 md:place-self-end">
          <div className=" mx-auto flex h-[400px] w-[400px]  items-center justify-center rounded-full border-2 border-teal-500 bg-gray-800 bg-[linear-gradient(45deg,transparent_15%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease]  hover:bg-[position:200%_0,0_0] hover:duration-[2000ms]  ">
            <img
              src="/Rohit_Umadi.png"
              width={300}
              height={300}
              className=" rounded-full  lg:h-[350px] lg:w-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
