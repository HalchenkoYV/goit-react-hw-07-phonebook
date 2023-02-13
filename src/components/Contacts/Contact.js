import React from 'react';
import { useDeleteContactMutation } from 'redux/apiServices/contactsApi';

export const Contact = ({ contact}) => {
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
    const { name, phoneNumber, id } = contact;
    return (
        (<li>
            <span>{name}: {phoneNumber}</span>
            {<button  onClick={() => deleteContact(id)} disabled={isDeleting}>
                Delete
            </button>}
        </li>)    
    );
};

