
import { useEffect, useState } from "react";


const TextAnimation = () => {
    const [text,setText]=useState('');
    const fullText = ' Frontend Web Developer';
    useEffect (()=>{
     const interval = setInterval(()=>{
        setText((prev)=>{
            if(prev.length=== fullText.length)return '';
            return fullText.slice(0,prev.length + 4);
        })
     },1000)
     return ()=> clearInterval(interval)
    },[])
    return (
        <div>
            <h1 className="text-4xl font-bold text-white tracking-wide">
                {text}
                <span className="border-r-2 animate-pulse ml-1"></span>
            </h1>
        </div>
    );
};

export default TextAnimation;