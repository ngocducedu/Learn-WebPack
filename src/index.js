import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

class TimeApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = { time: {},
                        text: '',
                        seconds: '' };
        this.timer =  0;
        this.secondsToHm = this.secondsToHm.bind(this);
        this.startTime = this.startTime.bind(this);
        this.countTime = this.countTime.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    secondsToHm(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }

    componentDidMount() {
        let timeLeft = this.secondsToHm(this.state.seconds);
        this.setState({ time: timeLeft});
    }

    startTime() {
        if(true) {
            this.timer = setInterval(this.countTime, 1000);
        }
    }

    countTime() {
        // -1s when render happen
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToHm(seconds),
            seconds : seconds,
        });

        if(seconds === 0) {
            clearInterval(this.timer);
        }
    }

    handleChange(event) {
        this.setState({seconds: event.target.value});
      }
    
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
            <div className="home">
                <form onSubmit={this.handleSubmit}>
                    <div id="clock">
                        <label>
                        <input type="text" onChange={this.handleChange}/>
                        </label>
                        <p className="text">Countdown Timer</p>
                        <button onClick={this.startTime} className="btn">Start</button>            
                        <p className="time"> {this.state.time.h } h: {this.state.time.m} m: {this.state.time.s}</p>
                    </div>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<TimeApp />, document.getElementById('app'));


module.hot.accept();