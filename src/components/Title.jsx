import React from 'react'
import './common.css'

const Title = ({title}) => {
    return (
        <div className='title-container'>
            <div className="title-underline"></div>
            <h1 className="title">{title}</h1>
        </div>
    )
}

export default Title