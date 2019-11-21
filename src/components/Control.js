import React from 'react'

const Control = ({isPaused, onTogglePause}) =>
<div className="field is-grouped is-grouped-centered">
  <p className="control">
    <button className="button is-success is-rounded is-medium"
            disabled={ isPaused }
            onClick={onTogglePause}>Pause</button>
  </p>
  <p className="control">
    <button className="button is-success is-rounded is-medium"
            disabled={ !isPaused }
            onClick={onTogglePause}>Resume</button>
  </p>
</div>

 export default Control
