import { createSlice } from '@reduxjs/toolkit';

import clientsArr from '../clients.json';

const initialState={
  clients: clientsArr,
}

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {

    clientAdd: (state,action) => {
      const obj = action.payload
        var maxId = state.clients.length !== 0? state.clients.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id : 0;
        var newObj = {...obj, id: maxId + 1}
        var newArr = [...state.clients, newObj];
        let newState={...state,
          clients: newArr
        };
        return newState;
    },

    clientDelete: (state,action) => {
      const id = action.payload
      let newState={...state,
        clients: state.clients.filter(el => el.id !== id),
      };
      return newState;
    },

    clientEdit: (state,action) => {
      const obj = action.payload
        let newState={...state,
          clients: [...state.clients].map(el => obj.id === el.id ? obj : el)
        };
        return newState;
    },
  },
});

export const { clientAdd, clientDelete, clientEdit } = clientsSlice.actions;

export default clientsSlice.reducer;

