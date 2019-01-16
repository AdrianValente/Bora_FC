import React from 'react'
import Chip from '@material-ui/core/Chip';

const InformacoesGrupo = ({quantidadetotal, jogadorconfirmado, jogadorhabilitados}) => (
    <div>
        <b>Jogadores</b> <Chip label={quantidadetotal} className={'chip'} /><b>Próximo Jogo:</b> Confirmados {jogadorconfirmado} de {jogadorhabilitados}.
    </div>
)

export default InformacoesGrupo