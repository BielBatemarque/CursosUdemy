import { useEffect, useState } from "react";
import { useCounterContext } from "../../contexts/CounterContext";

export const Home = () => {
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.increase();
  }, []);

  return (
    <div>
      <h1 onClick={() => actions.increase()}>oi</h1>
    </div>
  );
}