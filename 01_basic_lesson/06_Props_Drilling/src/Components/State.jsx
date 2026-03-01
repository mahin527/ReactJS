import React from 'react'
import District from './District'

const State = ({money}) => {
    return (
        <div>
            <h3>State GOV Component</h3>
            <District money={money} />
        </div>
    )
}

export default State