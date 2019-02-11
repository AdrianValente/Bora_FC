import React from 'react'

const TextItem = ({label, numero}) => (
    <div className='painel_status border_painel_default' >
        <span className="title_painel_special_status">{label}</span>
        <span className="position_Game_play">{numero}</span> 
    </div>
)

export default TextItem