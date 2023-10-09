import { useState } from "react";

export default function Testing() {
    const [count, setCount] = useState(0);
    const [isMember, setIsMember] = useState(null);

    const increaseFunction = (evt) => {
        setCount(count + 1);
    }

    const decreaseFunction = (evt) => {
        setCount(count - 1);
    }

    const signUpFunction = (evt) => {
        setIsMember(false);
    }

    const signInFunction = (evt) => {
        setIsMember(true);
    }

    return (
        <>
            <SmallTests increaseFunction={increaseFunction} decreaseFunction={decreaseFunction} memberTest={isMember} memberFunction={signInFunction} notMemberFunction={signUpFunction} />
            <p>{count}</p>
            <p>{isMember ? "Logged In" : "Sign In or Sign Up"}</p>
        </>

    )
}

function SmallTests({ increaseFunction, decreaseFunction, memberTest, memberFunction, notMemberFunction }) {
    return (
        <>
            <button onClick={increaseFunction}>+1</button>
            <br />
            <button onClick={decreaseFunction}>-1</button>
            <br />
            <p onClick={notMemberFunction}>Sign up</p>
            <br />
            <p onClick={memberFunction}>Sign in</p>

        </>
    )
}