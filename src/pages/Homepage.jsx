function Homepage() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="mb-4 text-4xl font-extrabold  text-white lg:text-6xl">
            Hi, I am Rohit
          </h1>
          <p className="text-lg text-gray-300 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            beatae laborum soluta, nam aspernatur esse provident explicabo
            consequuntur rerum impedit velit nostrum error eius suscipit officia
            minus fugit laboriosam aut. Voluptate suscipit ipsa necessitatibus
            deserunt incidunt voluptates, id quos accusantium sed magni adipisci
            delectus pariatur excepturi debitis magnam! Vitae, perspiciatis.
          </p>
        </div>
        <div className="col-span-5">
          <div className=" flex h-[400px] w-[400px] items-center justify-center rounded-full bg-gray-800 ">
            <img
              src="/Rohit_Umadi.png"
              width={300}
              height={300}
              className="rounded-full lg:h-[350px] lg:w-[350px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
