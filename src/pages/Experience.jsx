import Heading from '../components/Heading';

function Experience() {
  return (
    <>
      <Heading title="Experience" />
      <section className="mt-5 flex h-full items-end justify-center px-3 text-white">
        <ul className="timeline timeline-snap-icon timeline-vertical ">
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5 motion-safe:animate-ping"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono ">Feb 2024</time>
              <div className="text-lg font-black">
                <img
                  width={48}
                  className="mr-3 inline-block"
                  src="hsbc.svg"
                  alt=""
                />
                HSBC Technologies
              </div>
              Got promoted to Software Engineer
              <p className=" text-sm">
                Supported containerization efforts using Docker and aided in the
                deployment orchestration with Kubernetes, acquiring foundational
                knowledge in modern DevOps practices.
              </p>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 text-end">
              <time className="font-mono ">August 2023</time>
              <div className="text-lg font-black">
                <img
                  width={48}
                  className="mr-3 inline-block "
                  src="hsbc.svg"
                  alt=""
                />
                HSBC Technologies
              </div>
              Joined HTI as a Trainee Software Engineer
              <p className=" text-sm">
                Contributed to the development of microservices architecture
                using Spring Boot framework under supervision, gaining practical
                experience in software engineering principles and best
                practices.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Experience;
