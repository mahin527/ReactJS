import React from 'react'

// function Products(props) {
function Product({ name, price, color, data }) {
    return (
        <>
            {/* <h3>Product: {props.name}</h3>
            <h4>Price: {props.price}</h4> */}

            <h3>Product: {name}</h3>
            <h4>Price: {price}</h4>
            <h4>Color: {color}</h4>

            {data && <>
                <p>Ram: {data.ram}</p>
                <p>Rom: {data.rom}</p>
                <p>Chip: {data.chip}</p>
            </>
            }
        </>
    )
}

export default Product