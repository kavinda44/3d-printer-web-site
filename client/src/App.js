// import LoginRegister from "./Components/LoginRegister/LoginRegister";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import axios from "axios";
// import MainHome from "./Components/LoginRegister/MainHome";
// import RegisterPage from "./Components/LoginRegister/RegisterPage";
// import { createContext, useState, useEffect } from "react";
// import Contact from "./Components/Pages/ContactPage/Contact";
// import AboutUs from "./Components/Pages/AboutUsPage/AboutUs";

// export const Context = createContext();

// axios.defaults.baseURL = "http://localhost:4000/api";
// axios.defaults.withCredentials = true;

// function App() {
//     const [Authenticated, setAuthenticated] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//       try {
//         axios.get('/').then((data) => {
//           // alert(data.data)
//           // console.log(data.data)
//           // if(data.status === 200) {
//           //   setAuthenticated(true)
//           //   navigate('/home');
//           //   console.log("this works ")
//           // }
//           if(data.data){
//             setAuthenticated(true)
//             navigate('/home');
//             console.log("setting auth app")
//           }

//         });

//       } catch (error) {
//         console.log("error occc"+ error)
//       }
//   },[]);

//   return (
//     <div>
//       <Context.Provider value={[Authenticated, setAuthenticated]}>
//       <Routes>
//         {/* {Authenticated ? (
//           <Route path='/home' element={<MainHome/>}/>
//         ) : (
//           <Route path='/' element={<LoginRegister/>}/>
//         )} */}
        
//         {/* <Route path='/home' element={Authenticated ? <MainHome /> : <Navigate to="/" />}/>
//         <Route path='/about' element={Authenticated ? <AboutUs /> : <Navigate to="/" />}/>
//         <Route path='/contact' element={Authenticated ? <Contact/> : <Navigate to="/" />}/>
//         <Route path='/' element={<LoginRegister/>}/>
//         <Route path='/register' element={<RegisterPage/>}/> */}

// <Route path='/' element={contents.map(contents => (
//                     <Product 
//                         key={contents.id}
//                         image={contents.image}
//                         name={contents.name}
//                         price={contents.price}
//                         totalSales={contents.totalSales}
//                         timeLeft={contents.timeLeft}
//                         rating={contents.rating}
//                     />
//                 ))}/>


//       </Routes> 
//       </Context.Provider>
//     </div>
//   );
// }

// export default App;

import LoginRegister from "./Components/LoginRegister/LoginRegister";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import MainHome from "./Components/LoginRegister/MainHome";
import RegisterPage from "./Components/LoginRegister/RegisterPage";
import { createContext, useState, useEffect } from "react";
import Contact from "./Components/Pages/ContactPage/Contact";
import AboutUs from "./Components/Pages/AboutUsPage/AboutUs";
import { Product } from './Components/Pages/ProductPage/Product';
import  contents  from './Components/Pages/ProductPage/contents';
import  Store  from './Components/Pages/StorePage/Store';

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
            console.log("setting auth app")
          }

        });

      } catch (error) {
        console.log("error occc"+ error)
      }
  },[]);

  return (
    <div>
      <Context.Provider value={[Authenticated, setAuthenticated]}>
      <Routes>
        {/* {Authenticated ? (
          <Route path='/home' element={<MainHome/>}/>
        ) : (
          <Route path='/' element={<LoginRegister/>}/>
        )} */}
        
        <Route path='/home' element={Authenticated ? <MainHome /> : <Navigate to="/" />}/>
        <Route path='/store' element={Authenticated ? <Store/> : <Navigate to="/" />}/>
        <Route path='/about' element={Authenticated ? <AboutUs /> : <Navigate to="/" />}/>
        <Route path='/contact' element={Authenticated ? <Contact/> : <Navigate to="/" />}/>
        <Route path='/' element={<LoginRegister/>}/>
        <Route path='/register' element={<RegisterPage/>}/>

{/* <Route path='/' element={contents.map(contents => (
                    <Product 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                ))}/> */}


      </Routes> 
      </Context.Provider>
    </div>
  );
}

export default App;

