import "./App.css";
// @deno-types="@types/react"
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import StockList from "./components/FileList.tsx"; // ✅ Import the StockList component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StockList />
    </>
  );
}

export default App;
