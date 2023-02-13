// import './Contacts.module.css';
import React,{useState} from 'react';
import { Contact } from './Contact';
import { useFetchContactsQuery } from 'redux/apiServices/contactsApi';



export const Contacts = () => {
    const [filter, setFilter] = useState('');
    const { data: contacts, isFetching } = useFetchContactsQuery();
    const handleFilterChange = e => setFilter(e.target.value.toLocaleLowerCase());
    const visibleContacts = (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter),
        );
    };
    const listContacts = isFetching ? [] : visibleContacts(contacts, filter);

    return (
        <div>
            <label>Find contacts by name
                <input
                    type="text"
                    name="filter"
                onChange={handleFilterChange}
                />
            </label>
            <ul>
                {isFetching ? 'loading...' :
                    listContacts.map(contact => {
                        return (<Contact key={contact.id} contact={contact} />)
                    })}
            </ul>
        </div>
    );
};

