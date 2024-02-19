function Slider({ level, setLevel }) {
  return (
    <>
      <input
        type="range"
        min={0}
        max="3"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="range range-primary range-xs "
        step="1"
      />
      <div className="flex w-full justify-between px-2 text-sm">
        <span>Beginner</span>
        <span>Intermediate</span>
        <span>Pro</span>
        <span>All</span>
      </div>
    </>
  );
}

export default Slider;
