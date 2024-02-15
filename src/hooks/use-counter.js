import React, {useState, useEffect} from "react";
const useCounter = (flag = 1)=>{
    const [counter, setCounter] = useState(0);
    useEffect(() =>{
       const interval = setInterval(()=>{
         (flag!=1)?setCounter((prev) =>prev-1):setCounter(prev=> prev+1);
       },1000);

       return ()=> clearInterval(interval);
    },[flag]);
    return counter;
};
export default useCounter;