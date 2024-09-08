function Company({
  isLeft,
  isCurrent,
  name,
  img,
  time,
  position,
  isFirst,
  description,
}) {
  return (
    <li>
      <hr />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-5 w-5 text-primary ${isCurrent ? 'motion-safe:animate-ping' : ''}`}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className={`timeline-${!isLeft ? 'end' : 'start text-end'} mb-10`}>
        <time className="font-mono ">{time}</time>
        <div className="text-lg font-black">
          <img width={48} className="mr-3 inline-block" src={img} alt="" />
          {name}
        </div>
        {position}
        <p className=" text-sm">{description}</p>
      </div>
      {!isFirst && <hr className="bg-primary" />}
    </li>
  );
}

export default Company;
