import './App.css';
import AddTast from './Pages/AddTast';
import AddData from './Pages/AddData';
import {BrowserRouter} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    
<BrowserRouter>
    <Routes>
      <Route path='/' element={<AddTast/>}/>
      <Route path='/data' element={<AddData/>}/>
    </Routes>
</BrowserRouter>
    
  );
}

export default App;
