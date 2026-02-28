import React from 'react'
import People from './People'

const Village = ({money}) => {
    return (
        <div>
            <h3>Village GOV Component</h3>
            <People money={money} />
        </div>
    )
}

export default Village