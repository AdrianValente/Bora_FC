import React from 'react'
import Grid from '@material-ui/core/Grid';

import DateSepareteItem from '../../components/DateSepareteItem';
import GameStatus from '../../components/ListBoard/GameStatus';

const ListBoard = () => (
    <div>
        <GameStatus />
        <DateSepareteItem date={'Dezembro 2018'} />

        <GameStatus />
        <GameStatus />
        <DateSepareteItem date={'Novembro 2018'} />

        <GameStatus />
        <DateSepareteItem date={'Outubro 2018'} />

        <GameStatus />

    </div>
)

export default ListBoard