import React,{useState} from "react";

function Greet(){

    const [greeting , setGreeting]=useState("");
    const time=new Date().getHours();

    function handleClick(){
        if(time<12){
            setGreeting("Good Morning");
        }
        else if(time>=12 && time<16){
            setGreeting("Good Afternoon");
        }
        else if(time>=16 && time<=24){
            setGreeting("Good Evening");
        }
    }

    return (
        <div className="container">
            <h2>{greeting}</h2>
            <button onClick={handleClick}>Greet Me</button>
        </div>
    );
}
export default Greet;