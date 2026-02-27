import React from 'react'

function Items() {
    const age = 18
    const NIDCard = false
    const gmail = true
  return (
    <>
    <h3>1. Ternery Operator</h3>
    <h4>
        {
            (age >= 18) ? (`You can Drive!`) : (`You are not eligible to drive!`)
        }
    </h4>
    <h3>2. && Operator</h3>
    
    <h4>
    {NIDCard && `You can open a bank account` }
    {gmail && `You can make youtube channel` }
    </h4>

    </>
  )
}

export default Items