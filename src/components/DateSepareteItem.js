import React from 'react'
import Chip from '@material-ui/core/Chip';

const DateSepareteItem = ({date}) => (
    <div className="dateWarp">
         <Chip label={date} className={'chip'} />
    </div>
)

export default DateSepareteItem