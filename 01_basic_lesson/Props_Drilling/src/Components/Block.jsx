import React from 'react'
import Village from './Village'

const Block = ({money}) => {
  return (
    <div>
      <h3>Block GOV Component</h3>
      <Village money={money} />
    </div>
  )
}

export default Block