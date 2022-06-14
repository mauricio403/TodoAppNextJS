import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { DragEvent, useContext } from 'react'
import { FC } from 'react'
import { Entry } from '../../interfaces/entry'
import { UIContext } from './../../context/ui/UIContext';

interface Props {
    entry: Entry
}

export const EntryCard:FC<Props> = ({entry}) => {


    const {startDragging, endDragging} = useContext(UIContext);



    const onDragStart = (e:DragEvent) => {

        e.dataTransfer.setData('Text', entry._id);

        startDragging();

        //modificar el estado para indicar que esto haciendo drag

    }

    const onDragEnd = () => {
        //fon del drag
        endDragging();
    }

    return (

        <Card
            sx={{marginBottom: 1}}
            draggable 
            onDragStart={ onDragStart }
            onDragEnd={onDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }} >
                        {entry.description}
                    </Typography>
                </CardContent>
                <CardActions  sx={{
                    display:'flex',
                    justifyContent:'end',
                    paddingRight:2
                }}>
                    <Typography variant='body2' >
                        Hace 30 minutos
                    </Typography>
                </CardActions>
            </CardActionArea>

        </Card>

    )
}
