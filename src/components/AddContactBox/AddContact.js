import './AddContact.module.css';
import { toast } from 'react-hot-toast';
import { useCreateContactMutation } from '../../redux/apiServices/contactsApi';


function AddContactBox() {
      const [createContact, { isLoading }] = useCreateContactMutation();


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        createContact(form.elements.name.value, form.elements.number.value );
        e.currentTarget.reset();
        toast.success('Заметка создана!');
  };


    return (
        <form onSubmit={handleSubmit} >
            <label>Name
                <input
                    type="text"
                    name="name"
                    defaultValue={'abc'}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>Number
                <input
                    type="tel"
                    name="number"
                    defaultValue={'88888888'}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button variant="contained" type='submit' disabled={isLoading}  >Add contact</button>
        </form>
   )
};

export default AddContactBox;