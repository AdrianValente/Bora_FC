import React from 'react'
import Avatar from '@material-ui/core/Avatar';

import urlImagem from '../../img/icons/ico_goleiro.png';

const PlayerPosition = ({date}) => (
    <div className='painel_status border_painel_default' >
        <span className="title_painel_special_status">Posição</span>
        <Avatar alt="Goleiro" src={urlImagem} className='img_painel_especial_status' />
    </div>
)

export default PlayerPosition