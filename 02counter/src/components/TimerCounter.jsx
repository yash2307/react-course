

const TimerCounter = () => {
return (
  <div className="container">
    <h2>Timer Counter Component</h2>
    <div className="container__cols">
        <p className="container__cols_label">Hours</p>
        <p className="container__cols_label">Minutes</p>
        <p className="container__cols_label">Seconds</p>
    </div>
    <div className="container__buttons">
        <button className="container__buttons_start">Start</button>
        <button className="container__buttons_stop">Stop</button>
        <button className="container__buttons_reset">Pause</button> 
    </div>
  </div>
)
}

export default TimerCounter;