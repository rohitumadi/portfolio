import Company from '../components/Company';
import Heading from '../components/Heading';

function Experience() {
  return (
    <>
      <Heading title="Experience" />
      <section className="mt-5 flex h-full items-end justify-center px-3 text-white">
        <ul className="timeline timeline-vertical timeline-snap-icon ">
          <Company
            img={'hsbc.svg'}
            isCurrent={true}
            isLeft={false}
            time={'Feb 2024'}
            name={'HSBC Technologies'}
            position={'Full Stack Software Engineer'}
            description={
              'Supported containerization efforts using Docker and aided in the deployment orchestration with Kubernetes, acquiring foundational knowledge in modern DevOps practices.'
            }
          />
          <Company
            isFirst={true}
            isLeft={true}
            img={'hsbc.svg'}
            time={'August 2023'}
            name={'HSBC Technologies'}
            position={'Trainee Software Engineer'}
            description={
              'Contributed to the development of microservices architecture using Spring Boot framework under supervision, gaining practical experience in software engineering principles and best practices.'
            }
          />
        </ul>
      </section>
    </>
  );
}

export default Experience;
