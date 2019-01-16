import React from 'react'
import Grid from '@material-ui/core/Grid';

import SeparadorItemData from '../../components/SeparadorItemData';
import SairGrupo from '../../components/QuadroAviso/SairGrupo';
import AvaliarJogo from '../../components/QuadroAviso/AvaliarJogo';
import InformacaoJogo from '../../components/QuadroAviso/InformacaoJogo';
import ConfirmacaoJogo from '../../components/QuadroAviso/ConfirmacaoJogo';

const ListBoard = () => (
    <div className="containe_games" >
        <ConfirmacaoJogo grupo={'Grupo do Colégio'} data={'20/01/2018'} hora={'20:00'} local={'Lorem ipsum dolor sit amet.'} />
        <SeparadorItemData date={'Dezembro 2018'} />

        <InformacaoJogo grupo={'Grupo dos Porteiros'} data={'20/12/2018'} hora={'01:00'} local={'Lorem ipsum dolor sit amet.'} aviso={'fim'} />
        <SeparadorItemData date={'Novembro 2018'} />

        <InformacaoJogo grupo={'Grupo dos Porteiros'} data={'20/11/2018'} hora={'01:00'} local={'Lorem ipsum dolor sit amet.'} aviso={'realizado'} />
        <InformacaoJogo grupo={'Domingão dos Amigos'} data={'12/11/2018'} hora={'19:30'} local={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} aviso={'cancelado'} />
        <AvaliarJogo grupo={'Tabajara Futebol Clube'} data={'9/11/2018'} hora={'15:30'} local={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />        
        <SeparadorItemData date={'Outubro 2018'} />
        
        <SairGrupo grupo={'Tabajara Futebol Clube'} />
    </div>
)

export default ListBoard