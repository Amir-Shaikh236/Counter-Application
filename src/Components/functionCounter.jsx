import {React, useState} from "react";

const FunctionCounter = () => {

    const [count, setCount] = useState(0);

    const decrement = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h1 className="border-2 border-purple-500 rounded-2xl py-2 my-4 font-light flex items-center justify-center text-2xl bg-black">Count: {count}</h1>
            <button onClick={decrement} className='border-2 p-3 me-2'> - </button>
            <button onClick={() => { setCount(count + 1)}} className='border-2 p-3 me-2'> + </button>
        </div>
    );
}

export default FunctionCounter;