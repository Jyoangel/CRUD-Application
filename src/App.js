//components

import NavBar from './components/NavBar';
import FoodCompany from './components/FoodComany';
import AllEmployees from './components/AllEmployees';
import AddEmployees from './components/AddEmployees';
import EditEmployees from './components/EditEmployees';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
      <NavBar/>
     <Routes>
       <Route path="/" element ={<FoodCompany/>} />
       <Route path ="/all" element = {<AllEmployees/>} />
       <Route path ="/add" element = {<AddEmployees/>} />
       <Route path='/edit/:id' element={<EditEmployees/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
