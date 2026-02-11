

const TimerCounter = () => {

    const handleStart = () => {
        console.log("Start button clicked");
        
    }
    const handleStop = () => {
        console.log("Stop button clicked");
    }
    const handleReset = () => {
        console.log("Reset button clicked");
    }
    return  (
        <div className="container">
            <h2>Timer Counter Component</h2>
            <div className="container__cols">
                <p className="container__cols_label">Hours</p>
                <p className="container__cols_label">Minutes</p>
                <p className="container__cols_label">Seconds</p>
            </div>
            <div className="container__cols_input">
                <input className="container__cols_input_label hour" placeholder="00" type="number"  />
                <input className="container__cols_input_label minute" placeholder="00" type="number"  />
                <input className="container__cols_input_label second" placeholder="00" type="number"  />   
            </div>
            <div className="container__cols_buttons">
                <button className="container__cols_buttons_label start" onClick={handleStart}>Start</button>
                <button className="container__cols_buttons_label stop" onClick={handleStop}>Stop</button>
                <button className="container__cols_buttons_label reset" onClick={handleReset}>Reset</button> 
            </div>
        </div>
    )
}

export default TimerCounter;