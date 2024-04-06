import React from 'react'

function Card(props) {
    return (
        <div className='card'>
            <img className="image" src={props.image} alt="No Image Found" />
            <h1 className='title'>{props.title}</h1>
            <p className='price'>{props.price}</p>

        </div>
    )
}

export default Card