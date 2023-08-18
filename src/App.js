import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        
      </Route>
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
