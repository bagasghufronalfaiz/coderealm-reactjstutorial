import React from 'react'
import moment from 'moment'
import Control from './Control'

export default class Countdown extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      duration: this.getRemainingTime(),
      paused: false
    }
    this.handleTogglePause = this.handleTogglePause.bind(this)
  }

  componentDidMount(){
    this.interval = setInterval (() => {
      this.setState({
        duration: this.getRemainingTime()
      })
    },1000)
  }

  componentsWillUnmount(){
    clearInterval(this.interval)
  }

  getRemainingTime(){
    let now = moment(),
        newYear = moment({year: now.year()+1}),
        diff = newYear.diff(now)

    return moment.duration(diff)
  }

  handleTogglePause = () => {
    this.setState({
      paused: !this.state.paused
    });

    if(!this.state.paused){
      clearInterval(this.interval)
    } else {
      this.interval = setInterval (() => {
        this.setState({
          duration: this.getRemainingTime()
        })
      },1000)
    }
  }

  render() {
    const { duration, paused } = this.state

    return (
      <section className="hero is-white is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">
              2020 is coming up!
            </h1>
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Days</p>
                  <p className="title">{ Math.floor(duration.asDays()) }</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Hours</p>
                  <p className="title">{ duration.hours() }</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Minutes</p>
                  <p className="title">{ duration.minutes() }</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Seconds</p>
                  <p className="title">{ duration.seconds() }</p>
                </div>
              </div>
            </nav>
            <Control isPaused={ paused } onTogglePause={ this.handleTogglePause }/>
          </div>
        </div>
      </section>
    )
  }
}
