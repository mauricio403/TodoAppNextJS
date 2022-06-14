import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import React, { ChangeEvent } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { EntriesContext } from './../../context/entries/EntriesContext';
import { UIContext } from './../../context/ui/UIContext';

export const NewEntry = () => {

    const {addNewEntry} = useContext(EntriesContext);
    const {isAddingEntry, setIsAddingEntry} = useContext(UIContext)

    const [isOpen, setisOpen] = useState(false);

    const [inputValue, setinputValue] = useState('');

    const [isTouched, setisTouched] = useState(false);


    const onTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setinputValue(e.target.value);
    }

    const onSave = () => {
        if(inputValue.length === 0) return;
        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setisTouched(false);
        setinputValue('')


    }

    return (
        <Box sx={{
            marginBottom: 2,
            paddingX: 2
        }}>

            {
                isAddingEntry ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{
                                marginTop: 2,
                                marginBottom: 2,
                            }}
                            placeholder='Nueva entrada'
                            autoFocus
                            label='Nueva entrada'
                            multiline
                            helperText={inputValue.length <=0  && isTouched  &&  'Ingrese un valor'}
                            error={inputValue.length <=0  && isTouched}
                            value={inputValue}
                            onChange={ onTextChange }
                            onBlur={() => setisTouched(true)}
                        />


                        <Box display='flex' justifyContent='space-between' >
                            <Button variant='outlined' color="secondary" endIcon={<SaveOutlinedIcon />} onClick={onSave} >
                                Guardar
                            </Button>
                            <Button variant='text' color="secondary" onClick={() => setIsAddingEntry(false)}>
                                Cancelar
                            </Button>
                        </Box>
                    </>
                )
                    :
                    (
                        <Button
                            startIcon={<AddCircleOutlineOutlinedIcon />}
                            fullWidth
                            variant='outlined'
                            onClick={() => setIsAddingEntry(true)}
                        >
                            Agregar Tarea

                        </Button>
                    )
            }

        </Box>
    )
}
