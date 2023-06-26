
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContactList from './components/contacts/contactlist/ContactList';
import AddContact from './components/contacts/addcontact/AddContact';
import ViewContact from './components/contacts/viewcontact/ViewContact';
import EditContact from './components/contacts/editcontact/EditContact';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path={'/'} element={<Navigate to={'/contact/list'}/>} />
      <Route path={'/contact/list'} element={<ContactList/>}/>
      <Route path={'/contact/add'} element={<AddContact/>}/>
      <Route path={'/contact/view/:contactid'} element={<ViewContact/>}/>
      <Route path={'/contact/edit/:contactid'} element={<EditContact/>}/>

      </Routes> 
    </>
  );
}

export default App;
