import React from "react";
import moment from "moment";

//import necessary components
import Settings from "../settings/settings.component";
import Timer from "../timer/timer.component";
import TimerButton from "../timer-button/timer-button.component";

//import necessary styles
import "./clock.styles.scss";

//this container will pass on necessary information to it's components, hence it will be a class component

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Break: 5,
      Session: 25,
      timerState: "Session",
      isStarted: false,
      isWorking: false,
      modifiedTime: ""
    };

    this.audio = React.createRef();
  }

  handleSettingsClick = (name, effect) => {
    switch (effect) {
      case "increase":
        if (this.state[name] === 60) return;
        return this.setState({
          [name]: this.state[name] + 1
        });
      case "decrease":
        if (this.state[name] === 1) return;
        return this.setState({
          [name]: this.state[name] - 1
        });
      default:
        return;
    }
  };

  handleTimerButtons = id => {
    const { modifiedTime, isStarted } = this.state;

    switch (id) {
      case "reset":
        //stop the audio and counting and return to initial state
        clearInterval(this.interval);
        this.audio.current.pause();
        this.audio.current.currentTime = 0;

        return this.setState({
          Break: 5,
          Session: 25,
          timerState: "Session",
          isStarted: false,
          isWorking: false,
          modifiedTime: ""
        });

      case "start_stop":
        if (modifiedTime && isStarted) {
          //means that user wants to stop it
          clearInterval(this.interval);
          return this.setState({
            isStarted: false,
            isWorking: false
          });
        } else {
          //means that user wants to start the cycle, isStarted is always false in here
          return this.setState({
            isStarted: !this.state.isStarted
          });
        }
      default:
        return;
    }
  };

  interval = null; //setting up a property to allow buttons to stop the interval

  initializeInterval = (formatSession, formatBreak) => {
    this.interval = setInterval(() => {
      //setting it's value in here ^
      this.handleInterval(formatSession, formatBreak);
    }, 1000);
  };

  handleInterval = (formatSession, formatBreak) => {
    const { timerState, modifiedTime, isWorking } = this.state;

    const initialTime = timerState === "Session" ? formatSession : formatBreak;

    if (modifiedTime === "00:00") {
      this.audio.current.currentTime = 0;
      this.audio.current.play();
      switch (timerState) {
        case "Session":
          return this.setState({
            timerState: "Break",
            modifiedTime: ""
          });
        case "Break":
          return this.setState({
            timerState: "Session",
            modifiedTime: ""
          });
        default:
          return;
      }
    }

    if (initialTime === "60:00" && !isWorking) {
      return this.setState({
        isWorking: true,
        modifiedTime: "59:59"
      });
    }

    const newMoment = moment(modifiedTime || initialTime, "mm:ss").subtract(
      1,
      "seconds"
    );

    return this.setState({
      isWorking: true,
      modifiedTime: newMoment.format("mm:ss")
    });
  };
  render() {
    const {
      Break,
      Session,
      timerState,
      isStarted,
      isWorking,
      modifiedTime
    } = this.state;

    const formatBreak =
      Break === 60
        ? "60:00"
        : moment()
            .minute(Break)
            .seconds(0)
            .format("mm:ss");

    const formatSession =
      Session === 60
        ? "60:00"
        : moment()
            .minute(Session)
            .seconds(0)
            .format("mm:ss");

    const timeLeft = timerState === "Session" ? formatSession : formatBreak;

    if (isStarted && !isWorking)
      this.initializeInterval(formatSession, formatBreak);

    return (
      <div id="clock">
        <Settings
          name="Session"
          duration={Session}
          onClick={this.handleSettingsClick}
          isWorking={isWorking}
        />
        <Settings
          name="Break"
          duration={Break}
          onClick={this.handleSettingsClick}
          isWorking={isWorking}
        />
        <Timer show={timerState} timeLeft={modifiedTime || timeLeft} />
        <div className="buttons">
          <TimerButton id="start_stop" onClick={this.handleTimerButtons}>
            {isStarted ? "Stop" : "Start"}
          </TimerButton>
          <TimerButton id="reset" onClick={this.handleTimerButtons}>
            Reset
          </TimerButton>
          <audio ref={this.audio} id="beep" src="https://goo.gl/65cBl1" />
        </div>
      </div>
    );
  }
}

export default Clock;
