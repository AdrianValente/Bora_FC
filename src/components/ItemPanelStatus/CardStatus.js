import React from 'react'
import Avatar from '@material-ui/core/Avatar';

import urlImagem from '../../img/icons/ico_cartao_amarelo.png';

const ItemCardStatus = ({date}) => (
    <div className='painel_status border_painel_default' >
        <span className="title_painel_special_status">Cartão</span>
        <Avatar alt="Destaque" src={urlImagem} className='img_painel_especial_status' />
    </div>
)

export default ItemCardStatus