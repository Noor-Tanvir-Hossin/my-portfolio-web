import React, { useEffect, useState } from 'react';

const TextChange = () => {

    const texts=["Hi, I'm Tanvir","Hi, I'm Tanvir","Hi, I'm Tanvir"]
    const [currentText,setCurrentText]= useState("")
    const [endValue,setEndValue]= useState(true)
    const [isForward,setIsForwar]= useState(true)
    const [index,setIndex]= useState(0)

    useEffect(() =>{

        const intervalId = setInterval(()=>{
            setCurrentText(texts[index].substring(0,endValue));
            if(isForward){
                setEndValue((prev) => prev + 1);
            }
            else{
                setEndValue((prev) => prev - 1)
            }
            if(endValue > texts[index].length + 10){
                setIsForwar(false)
            }
            if(endValue < 2.1){
                setIsForwar(true)
                setIndex((prev) => prev&texts.length)
            }
        }, 100);

        return () => clearInterval(intervalId)

    },[endValue, isForward, index, texts]);

    return (
        <div className='transition ease duration-300'>
            {currentText
            }
        </div>
    );
};

export default TextChange;