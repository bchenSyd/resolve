import React, {useState} from 'react'
import {useRenderCounter} from './hooks'

const CounterRawContext = React.createContext()

const CounterWrapper = ({countContext}) => {
  const renderCount = useRenderCounter()
  return (
    <div style={{border: '1px solid black', padding: 10}}>
      {renderCount}
      <ShowCount countContext={countContext} />
    </div>
  )
}

const ShowCount = ({countContext:{counter, setCounter}}) => {
  const renderCount = useRenderCounter()
  return (
    <div style={{border: '1px solid black', padding: 10}}>
      {renderCount}
      {`The current count is ${counter}. `}
      <button onClick={() => setCounter(counter + 1)}>Increment count</button>
    </div>
  )
}

const CounterTraditional = () => {
  const [, forceUpdate] = useState()

  const renderCount = useRenderCounter()
  const [counter, setCounter] = useState(0)
  return (
    <div style={{marginTop: '50px', border: '1px solid red', padding: 10}}>
      {renderCount}
      <button onClick={() => forceUpdate({})}>force render</button>
      <CounterRawContext.Provider value={{counter, setCounter}}>
        <CounterRawContext.Consumer>
          {countContext => <CounterWrapper countContext={countContext} />}
        </CounterRawContext.Consumer>
      </CounterRawContext.Provider>
    </div>
  )
}

export default CounterTraditional
