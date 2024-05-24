import LoginRegister from './Components/LoginRegister/LoginRegister';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios';
import MainHome from './Components/LoginRegister/MainHome';
import RegisterPage from './Components/LoginRegister/RegisterPage';
import { createContext, useState, useEffect} from 'react';

export const Context = createContext();

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.withCredentials = true;

function App() {
  const [Authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get('/').then((data) => {
        // alert(data.data)
        // console.log(data.data)
        // if(data.status === 200) {
        //   setAuthenticated(true)
        //   navigate('/home'); 
        //   console.log("this works ")
        // }
        if(data.data){
          setAuthenticated(true)
          navigate('/home'); 
          console.log("setting auth")
        }
          
          
      });
  
    } catch (error) {
      console.log("error occc"+ error)
    } 
},[]); 
  return (
    <div >
      <Context.Provider value={[Authenticated, setAuthenticated]}>
      <Routes>
      {/* {Authenticated ? (
          <Route path='/home' element={<MainHome/>}/>
        ) : (
          <Route path='/' element={<LoginRegister/>}/>
        )} */}
          <Route path='/home' element={Authenticated ? <MainHome /> : <Navigate to="/" />}/>
          <Route path='/' element={<LoginRegister/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
        </Context.Provider>
    </div>
  );
}

export default App;