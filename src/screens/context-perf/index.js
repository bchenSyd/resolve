import React from 'react'
import ReactDOM from 'react-dom'
import CounterTraditional from './traditional'
import Proposed from './proposed'

function App() {
  return (
    <>
      <Proposed />

      <CounterTraditional />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
