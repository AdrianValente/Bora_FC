import React from 'react'
import Avatar from '@material-ui/core/Avatar';

import urlImagem from '../../img/icons/ico_furao.png';

const ItemPainelStatusSpecial = ({date}) => (
    <div className='painel_status' >
         <Avatar alt="Furão" src={urlImagem} className='img_painel_especial_status' />
    </div>
)

export default ItemPainelStatusSpecial