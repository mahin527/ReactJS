import React from 'react'

function MapLearn() {
    const companyNames = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple']
    const smartphones = [
        {
            id: 1,
            model: 'Iphone 16 pro max',
            img: 'https://m.media-amazon.com/images/I/71QkWOSDkmL._AC_UY218_.jpg'
        },
        {
            id: 2,
            model: 'Google pixel 9a',
            img: 'https://m.media-amazon.com/images/I/61IgWXs5BRL._AC_UY218_.jpg'
        },
        {
            id: 3,
            model: 'Samsung galaxy A14',
            img: 'https://m.media-amazon.com/images/I/71OK4AU02jL._AC_UY218_.jpg'
        }

    ]
    return (
        <>
            <div>
                <h1>
                    MapLearn
                </h1 >
                {companyNames.map((element, index) => (
                    <h4 key={index}>
                        {element}
                    </h4>
                ))}

            </div>

            <div>
                {smartphones.map((phone) => (
                    <div key={phone.id} style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
                        <img src={phone.img} alt={phone.img} width={100} height={100} style={{borderRadius: '10px'}} />
                        <p>{phone.model}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MapLearn