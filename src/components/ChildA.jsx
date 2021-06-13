import React,{useReducer} from 'react'
import ChildB from './ChildB';
import reducer from './reducer';

const intialeState = {count:0};



const ChildA = () => {
    const [state, dispatch] = useReducer(reducer, intialeState);
    
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
            
            <ChildB  />
            
            
        </>
    )
}
export default ChildA;
