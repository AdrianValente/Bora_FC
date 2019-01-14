import React from 'react'
import Avatar from '@material-ui/core/Avatar';

import urlImagem from '../../img/icons/ico_cadeira.png';

const PlayerHolder = ({date}) => (
    <div className='painel_status border_painel_default' >
        <span className="title_painel_special_status">Reserva</span>
        <Avatar alt="Reserva" src={urlImagem} className='img_painel_especial_status' />
    </div>
)

export default PlayerHolder