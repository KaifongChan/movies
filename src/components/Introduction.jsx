import { useState } from "react";

export default function Introduction() {
    const [isMember, setIsMember] = useState(null);

    function submitYesQuery() {
        setIsMember(false);
        document.getElementById("introduction").style.display = 'none';
    }

    function submitNoQuery() {
        setIsMember(true);
        document.getElementById("introduction").style.display = 'none';
    }

    console.log(isMember)


    return (
        <div className="h-screen flex flex-col justify-center items-center" id="introduction">
            <h1 className="text-white text-5xl" id="welcome">Welcome to Village Cinemas</h1>
            <div id="question" className="hidden">
                <h1 className="text-white text-5xl mb-10">Are you new to this website?</h1>
                {/* <br />
                <br /> */}
                <div className="flex flex-row">
                    <button id="yesBtn" className="basis-1/2 grow text-2xl hover:text-4xl duration-300" onClick={submitYesQuery}>Yes</button>
                    <button id="noBtn" className="basis-1/2 grow text-2xl hover:text-4xl duration-300" onClick={submitNoQuery}>No</button>
                </div>
            </div>
        </div>
    )
}



setTimeout(() => {
    document.getElementById("welcome").style.display = 'none';
    document.getElementById("question").style.display = "block"
}, 3000)