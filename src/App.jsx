import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Lime");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center inset-x-0 px-3 bottom-12">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("Fuchsia")} className="outline-none rounded-md p-2"
            style={{backgroundColor:"Fuchsia"}}>
              Fuchsia
              </button>
            <button onClick={() => setColor("green")} className="outline-none rounded-md p-2"
            style={{backgroundColor:"green"}}>
              Green
              </button>
            <button onClick={() => setColor("IndianRed")} className="outline-none rounded-md p-2"
            style={{backgroundColor:"IndianRed"}}>
              IndianRed
              </button>
            <button onClick={() => setColor("Crimson")} className="outline-none rounded-md p-2"
            style={{backgroundColor:"Crimson"}}>
              Crimson
              </button>
            <button onClick={() => setColor("HotPink")} className="outline-none rounded-md p-2"
            style={{backgroundColor:"HotPink"}}>
              HotPink
              </button>
            <button onClick={() => setColor("Tomato")} className="outline-none rounded-md p-2"
            style={{backgroundColor:"Tomato"}}>
              Tomato
              </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
