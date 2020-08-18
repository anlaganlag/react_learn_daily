import React,{useState,useEffect,useRef} from 'react'

function C() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(
            ()=>{setTimer(
                pre => pre +1
            )},
        1000)
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [])
    return (
        <div>
            Hook Timer = {timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>
                Clear Hook Timer
            </button>
        </div>
    )
}

export default C
