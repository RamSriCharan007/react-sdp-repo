import { BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import MainNavBar from './pages/MainNavBar';
import AdminNavBar from './admin/AdminNavBar';
import ManagerNavBar from './Manager/ManagerNavBar';
import CustomerNavBar from './customer/CustomerNavBar';

function App() {
  const [isAdmin] = useState(() => sessionStorage.getItem('isAdmin') === 'true');
  const [isManager] = useState(() => sessionStorage.getItem('isManager') === 'true');
  const [isCustomer] = useState(() => sessionStorage.getItem('isCustomer') === 'true');

  return (
     <BrowserRouter>
         {isAdmin && <AdminNavBar/>}
         {isManager && <ManagerNavBar/>}
         {isCustomer && <CustomerNavBar/>}
         {!isAdmin && !isManager && !isCustomer && <MainNavBar/>}
     </BrowserRouter>
  );
}

export default App;
