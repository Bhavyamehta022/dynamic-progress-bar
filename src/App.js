import ReactDOM from "react-dom/client";
import { Progress } from "./components/Progress";
import { useState, useEffect, use } from "react";

export const App = () => {
  const [progress, setProgress] = useState({});
  const [duration, setDuration] = useState(2);
  const [perc,setPerc] = useState({});
  const intervalTime = 20;
  const steps = duration*1000/intervalTime;
  const stepSize = 100/steps;
  const addProgress = () => {
    const id = Date.now();
    setProgress((prev) => ({
      ...prev,
      [id]: 0,
    }));
    setTimeout(() => {
      setProgress((prev) => ({
        ...prev,
        [id]: 100,
      }));
      console.log(progress);
    }, 50);
    setPerc((prev)=>({
        ...prev,
        [id]: 0
    }))
    const interval = setInterval(()=>{
        setPerc((prev)=>{
            if(prev[id]>=100){
                clearInterval(interval);
                return prev;
            }
            return {
                ...prev,
                [id]:prev[id]+stepSize
            }
        });
    },intervalTime)
  };
  return (
    <div className="progressDiv">
      <button onClick={() => addProgress()}>Add</button>
      <input type="text" value={duration} onChange={((e)=>setDuration(e.target.value))}/>
      <Progress progress={progress} duration={duration} perc={perc}/>
    </div>
  );
};

const container = document.getElementById("root");
let root = container._reactRoot;
if (!root) {
  root = ReactDOM.createRoot(container);
  container._reactRoot = root;
}
root.render(<App />);
