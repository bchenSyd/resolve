import React from 'react'
import {CountProvider, useCountState, useCountUpdater} from './count-context'
import { useRenderCounter } from './hooks';

/**
 * 
 * https://itnext.io/centralizing-api-error-handling-in-react-apps-810b2be1d39d
 * https://kentcdodds.com/blog/how-to-optimize-your-context-value
 * 
 */
const CountDisplay = React.memo(function CountDisplay() {
  const count = useCountState()
  const renderCount = useRenderCounter()
  return (
    <div style={{border: '1px solid black', padding: 10}}>
      {renderCount}
      {`The current count is ${count}. `}
    </div>
  )
})

const Counter = React.memo(function Counter() {
  const increment = useCountUpdater()
  const renderCount = useRenderCounter()
  return (
    <div style={{border: '1px solid black', padding: 10}}>
      {renderCount}
      <button onClick={increment}>Increment count</button>
    </div>
  )
})

const Proposed = () => {
  const [, forceUpdate] = React.useState()
  const renderCount = useRenderCounter()
  return (
    <div style={{border: '1px solid black', padding: 10}}>
      {renderCount}
      <button onClick={() => forceUpdate({})}>force render</button>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default Proposed;