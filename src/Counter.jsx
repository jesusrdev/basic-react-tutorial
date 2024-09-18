import { useRef, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const button = useRef(null);

  function incrementTwo() {
    setCount(count + 1);
  }

  return (
    <button onClick={() => incrementTwo()} ref={button}>
      count is {count}
    </button>
  );
}
