import React from 'react'
import Avatar from '@material-ui/core/Avatar';

const ImagemItem = ({label, urlImagem}) => (
    <div className='painel_status border_painel_default' >
        <span className="title_painel_special_status">{label}</span>
        <Avatar alt="Destaque" src={urlImagem} className='img_painel_especial_status' />
    </div>
)

export default ImagemItem