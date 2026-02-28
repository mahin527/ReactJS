import React from 'react'

function Events() {
    const showAlert = () => {
        alert('This is the alert box!')
    }

    let bodyStyle = document.body.style;
    const makeBGLight = () => {
        bodyStyle.backgroundColor = 'white';
        bodyStyle.color = 'black'
    }
    const makeBGDark = () => {
        bodyStyle.backgroundColor = 'black';
        bodyStyle.color = 'white'
    }
    return (
        <>
            <div>
                <h3>Events</h3>
                <button onClick={showAlert}>Show Alert</button>
                <div style={{ marginTop: '8px', display: 'grid', gap: '8px' }}>
                    <button onClick={makeBGLight}>Make Body Light</button>
                    <button onClick={makeBGDark}>Make Body Dark</button>
                </div>
            </div>
        </>
    )
}

export default Events