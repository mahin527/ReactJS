import React from 'react'

function FilterLearn() {
    const persons = [
        {
            id: 1,
            name: 'Mahin',
            active: true
        },
        {
            id: 2,
            name: 'Rajib',
            active: false
        },
        {
            id: 3,
            name: 'Bayzid',
            active: true
        },
        {
            id: 4,
            name: 'Carolina',
            active: false
        }
    ]
    return (
        <>
            <h1>
                FilterLearn
            </h1>
            {persons.filter((data) => data.active).map((person) => (
                <p key={person.id}>{person.name}</p> 
            ))}
        </>
    )
}

export default FilterLearn