import React from 'react'

export const useRenderCounter = () => {
  const ref = React.useRef()
  React.useEffect(() => {
    ref.current.textContent = Number(ref.current.textContent || '0') + 1
  })
  return (
    <div
      style={{
        backgroundColor: '#ccc',
        borderRadius: 4,
        padding: '2px 4px',
        fontSize: '0.8rem',
        margin: '0 6px',
        display: 'inline-block',
      }}
    >
      <span>the component has been re-rendered </span>
      <span ref={ref} />
      <span> time(s)</span>
    </div>
  )
}
