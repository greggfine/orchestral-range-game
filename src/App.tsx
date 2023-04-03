import { useState, useEffect } from "react";
import "./App.css";
import { instrumentRange } from "../types/types";

function App() {
  const [instrumentRanges, setInstrumentRanges] = useState<instrumentRange[]>(
    []
  );
  useEffect(() => {
    const fetchInstrumentRanges = async () => {
      const response = await fetch("/instrument-ranges.json");
      const instrumentRangeData = await response.json();
      setInstrumentRanges(instrumentRangeData);
    };
    fetchInstrumentRanges();
  }, []);
  return (
    <div className="App">
      <ul>
        {instrumentRanges.map((instrumentRangeData) => {
          return (
            <li key={instrumentRangeData.id}>{instrumentRangeData.name}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
