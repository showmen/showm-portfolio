import {useState, useEffect} from 'react'

function Stopwatch(){
    const [mili, setMili] = useState(0)
    const [isStarted,setIsStarted] = useState(false)

    useEffect(() => {
        let stopwatchInterval = null
        if(isStarted === true){
            stopwatchInterval = setInterval(() => {
                setMili((prev)=>{
                    return prev+10
                })
            }, 10)
        }
        else{
            clearInterval(stopwatchInterval)
        }
        return () => {
            clearInterval(stopwatchInterval);
        }
    },[isStarted])

    let start = () =>{
        if(isStarted === false){
            setIsStarted(true)
            document.getElementById('start_btn').innerHTML = 'Pause'
        }
        else{
            setIsStarted(false)
            document.getElementById('start_btn').innerHTML = 'Start'
        }
        
        
    }

    let reset = () =>{
        setIsStarted(false)
        setMili(0)
        document.getElementById('start_btn').innerHTML = 'Start'
    }

    return(
        <>   
            <center>
            <h1 className='stopwatch-title'>Stop Watch</h1>
            <table className='stopwatch-table'>
                <tbody>
                    <tr>
                        <td><h1>{(String(Math.floor((mili / 60000) % 60))).slice(-2)}:</h1></td>
                        <td><h1>{(String(Math.floor((mili/ 1000) % 60))).slice(-2)}.</h1></td>
                        <td><h1>{(String((mili / 10) % 100)).slice(-2)}</h1></td>
                    </tr>
                </tbody>
            </table>
            <button id="start_btn" className='start-btn' onClick={start}>Start</button>
            <button  className='reset-btn' onClick={reset}>Reset</button>
            </center>
        </>
    )
}

export default Stopwatch