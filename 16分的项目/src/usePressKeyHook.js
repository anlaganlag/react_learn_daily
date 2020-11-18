import React,{useState,useEffect}from 'react'


//處理按鍵的hooks..


export default function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
  
    const [keyPressed, setKeyPressed] = useState(false);
  
    // If pressed key is our target key then set to true
  //處理按鍵按下的狀態 即keyPressDown
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
  
    // If released key is our target key then set to false
  //按鍵擡起的狀態...
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };
  
    // Add event listeners
  
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
  
      window.addEventListener("keyup", upHandler);
  
      // Remove event listeners on cleanup
  
      return () => {
        window.removeEventListener("keydown", downHandler);
  
        window.removeEventListener("keyup", upHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return keyPressed;
  }
  