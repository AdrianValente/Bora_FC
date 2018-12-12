import React from 'react'

const AvaliableItem = ({texto, icone}) => (
    <div>
        <h1>
            <span className={`ecad ${icone}`}></span> {texto}   
        </h1>
    </div>
)

export default AvaliableItem