import LoginRegister from './Components/LoginRegister/LoginRegister';
import {Routes, Route} from 'react-router-dom'
import axios from 'axios';
import MainHome from './Components/LoginRegister/MainHome';
import RegisterPage from './Components/LoginRegister/RegisterPage';
import { createContext, useState} from 'react';

export const Context = createContext();

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

function App() {

  const [Authenticated, setAuthenticated] = useState(false);
  return (
    <div >
      <Context.Provider value={[Authenticated, setAuthenticated]}>
      <Routes>
      {Authenticated ? (
          <Route path='/home' element={<MainHome/>}/>
        ) : (
          <Route path="/" element={<LoginRegister />} />
        )}
          <Route path='/' element={<LoginRegister/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
        </Context.Provider>
    </div>
  );
}

export default App;