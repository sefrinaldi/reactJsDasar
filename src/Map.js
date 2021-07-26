import React from 'react'

const foods = [
    {
        nama : "soto",
        harga : 12000
    },
    {
        nama : "sate",
        harga : 10000
    },
    {
        nama : "Bakso",
        harga : 13000
    },
    {
        nama : "Martabak Mesir",
        harga : 25000
    },
]

const Map = () => {
    return (
        <div>
            <h2>Map</h2>
            <ul>
                {foods.map( (food, index) => (
                    <li>{index + 1} {food.nama} - harga {food.harga}</li>
                ))}
            </ul>

            <h2>Map filter harga yg lebih dari dan sama dengan 12000</h2>
            <ul>
                {foods
                .filter(food => food.harga > 10000)
                .map( (food, index) => (
                    <li>{index + 1} {food.nama} - harga {food.harga}</li>
                ))}
            </ul>
        </div>
    )
}

export default Map
