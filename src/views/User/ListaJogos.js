import React from 'react'
import Grid from '@material-ui/core/Grid';

import SeparadorItemData from '../../components/SeparadorItemData';
import GameStatus from '../../components/ListBoard/GameStatus';

const ListBoard = () => (
    <div className="containe_games" >
        <GameStatus />
        <SeparadorItemData date={'Dezembro 2018'} />

        <GameStatus />
        <GameStatus />
        <SeparadorItemData date={'Novembro 2018'} />

        <GameStatus />
        <SeparadorItemData date={'Outubro 2018'} />

        <GameStatus />

    </div>
)

export default ListBoard