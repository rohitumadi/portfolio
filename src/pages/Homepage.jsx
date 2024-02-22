import Button from '../components/Button';

function Homepage() {
  return (
    <section className="m-5 mt-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10 lg:gap-0  ">
        <div className="col-span-1 mt-5  justify-self-center  sm:order-last md:mt-0">
          <div className=" border-primary flex h-[400px] w-[400px] items-center justify-center  rounded-full border-2 bg-transparent lg:h-[455px] lg:w-[450px]    ">
            <img
              src="ru.png"
              width={400}
              height={400}
              className=" rounded-full  lg:h-[450px] lg:w-[450px]"
            />
          </div>
        </div>
        <div className="col-span-1  place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl font-extrabold  sm:text-5xl ">
            <span className="text-white ">Hi, I am Rohit Umadi</span>
          </h1>
          <p className="mb-5 text-base text-white sm:text-lg lg:text-xl">
            A passionate Front end engineer
            <span className="block">
              with an experience in Fullstack engineering.
            </span>
          </p>
          <Button>
            <a target="_blank" href="Rohit's Resume.pdf">
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
