
import { FC } from 'react';
import { EntriesContext } from './EntriesContext';
import { v4 as uuidv4 } from 'uuid';

import { useReducer } from 'react';
import { entriesReducer } from './entriesReducer';
import { Entry } from '../../interfaces/entry';

export interface EntriesState {
    entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: []
}

export const EntriesProvider= ({children}:any) => {

   const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

   const addNewEntry = (description: string) => {
        const newEntry:Entry = {
                _id: uuidv4(),
                description: description,
                createdAt:Date.now(),
                status:'pending'

        }

        dispatch({type:'[Entry] - Add-Entry', payload:newEntry})
   }

   const updatedEntry = (entry: Entry) => {
    dispatch({ type:'[Entry] - Entry- updated', payload: entry });
   }


    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updatedEntry
        }}>
                {children}
        </EntriesContext.Provider>
    )
}