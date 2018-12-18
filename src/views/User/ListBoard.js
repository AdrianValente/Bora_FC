import React from 'react'
import Grid from '@material-ui/core/Grid';

import DateSepareteItem from '../../components/DateSepareteItem';
import GetOutItem from '../../components/ListBoard/GetOutItem';
import AvaliableItem from '../../components/ListBoard/AvaliableItem';
import NoticeItem from '../../components/ListBoard/NoticeItem';
import GameItem from '../../components/ListBoard/GameItem';

const ListBoard = () => (
    <div className="containe_games" >
        <GameItem />
        <DateSepareteItem date={'Dezembro 2018'} />

        <NoticeItem />
        <DateSepareteItem date={'Novembro 2018'} />

        <NoticeItem />
        <AvaliableItem />        
        <DateSepareteItem date={'Outubro 2018'} />
        
        <GetOutItem/>
    </div>
)

export default ListBoard