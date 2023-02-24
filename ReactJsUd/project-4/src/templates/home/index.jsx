import { useCounterContext } from "../../contexts/CounterContext";
import { Button } from '../../components/Button/index';
import { Heading } from "../../components/Heading";

export const Home = () => {
  const [state, actions] = useCounterContext();

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClicked={() => actions.increase()}>Increase</Button>
        <Button onButtonClicked={() => actions.decrease()}>Decrease</Button>
        <Button onButtonClicked={() => actions.reset()}>reset</Button>
        <Button onButtonClicked={() => actions.setCounter({ counter: 10})}>set 10</Button>
        <Button onButtonClicked={() => actions.setCounter({ counter: 100})}>set 100</Button>
        <Button disabled={state.loading} onButtonClicked={() => actions.asyncIncrease()}>asyncIncrease</Button>
        <Button disabled={state.loading} onButtonClicked={() => actions.asyncError()}>async Error</Button>

      </div>
    </div>
  );
}