import './App.css';
import { Toaster } from 'react-hot-toast';
import AddContactBox from './AddContactBox/AddContact';
import {Contacts} from './Contacts/Contacts';
import Container from '@mui/material/Container';



const App =()=>{
  return (
      <Container>
        <AddContactBox />
        <Contacts />
        <Toaster position="top-right" />
      </Container>
  );
};

export default App;