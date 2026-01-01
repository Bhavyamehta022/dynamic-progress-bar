export const Progress = ({ progress,duration,perc }) => {
  return Object.keys(progress).map((id) => {
    return (
      <div className="grey" key={id}>
        <div className="green" style={{ width: `${progress[id]}%`, transition: `width ${duration}s linear`}}>{Math.floor(perc[id] ?? 0)}%</div>
      </div>
    );
  });
};
