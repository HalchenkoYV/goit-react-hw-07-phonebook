import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63e92756b120461c6bec0d66.mockapi.io/api/v1/'}),
  tagTypes:['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags:['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags:['Contacts']
    }),
    createContact: builder.mutation({
      query: (name,phoneNumber) => ({
        url: `contacts`,
        method: 'POST',
        body: {name,phoneNumber},
      }),
      invalidatesTags:['Contacts']
    }),
  }),
});
// useDeleteContactMutation, useCreateContactMutation 
export const { useFetchContactsQuery,useDeleteContactMutation, useCreateContactMutation  } = contactsApi;
