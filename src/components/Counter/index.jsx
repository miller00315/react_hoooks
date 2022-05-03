import { useContext } from "react"
import { incrementCounter, decrementCounter } from "../../contexts/CounterProvider/action";
import { CounterContext } from "../../contexts/CounterProvider/context"

export const Counter = () => {
    const counterContext = useContext(CounterContext);

    const {counterState, counterDispatch} = counterContext

    return (
        <div>
            <h1>{counterState.counter}</h1>
           <button onClick={() => incrementCounter(counterDispatch, counterState.counter)}>Counter +</button>

           <button onClick={() => decrementCounter(counterDispatch, counterState.counter)}>Counter -</button>  
        </div>
    );
}