function SkillItem({ width = 32, height = 32, path, skillName }) {
  return (
    <div className="border-primary shadow-primary flex items-center gap-2 rounded-lg border p-2 shadow-md transition-all duration-500 hover:-translate-y-3">
      <img width={width} height={height} src={path} alt="" />
      <span className="capitalize text-white">{skillName}</span>
    </div>
  );
}

export default SkillItem;
