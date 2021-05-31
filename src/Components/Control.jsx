import React from 'react'

import './сontrol.css'

const ClearBtn = ({clearInput, children})=> {
  return (
    <div className="clear"
      onClick={clearInput}>
      {children}
    </div>
  )
}

const BackBtn = ({removeLastElement, children}) => {
  return (
    <div className="back"
      onClick={removeLastElement}>
      {children}
    </div>
  )
}

export { ClearBtn, BackBtn }
