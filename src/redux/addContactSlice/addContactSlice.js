import { createSlice, nanoid } from "@reduxjs/toolkit";

const examplesArray = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: examplesArray,
  reducers: {
    addContacts: {
      reducer(state, action) {
            console.log(state)
        return [...state, action.payload]
      },
      prepare(name,number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteNumber(state, action) {
      return state.filter(contact => {return contact.id !== action.payload});
    },
  },
});

export const { addContacts, deleteNumber, } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
