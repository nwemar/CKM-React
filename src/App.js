
import React,{Suspense, useState } from 'react';
import './App.css';
import { Routes ,Route,useNavigate   } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logoimage from './component/logoimage';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Sidebar from './component/sidebar';
 import Home from './component/home';

// import ReactTeam from './component/ReactTeam';
// import Ckmgroups from './component/ckmgroups';
// import SystemTeam from './component/SystemTeam';
// import Csharp from './component/Csharp';

 import Login from './component/Login';
// import PHP from './component/PHP';
const About = React.lazy(() => import('./component/About'));
const ReactTeam = React.lazy(() => import('./component/ReactTeam'));
const Ckmgroups = React.lazy(() => import('./component/ckmgroups'));
const SystemTeam = React.lazy(() => import('./component/SystemTeam'));
const Csharp = React.lazy(() => import('./component/Csharp'));
const PHP = React.lazy(() => import('./component/PHP'));

function App() {
  const [loginSuccess, setLoginSuccess]=useState(false);
   const Csharp_data = useSelector(state => state.CSharp_Call_Reducer.csharpmembers);
  const PHP_data = useSelector(state => state.PHP_Call_Reducer.phpmembers);

   const [loginformData, setLoginFormData] = useState(
        {
            loginname: "",
            password: "",
            
        });
  const onLoginChange = (e) => {
        const { value, id } = e.target;

        setLoginFormData({ ...loginformData, [id]: value })
    }
    const navigate = useNavigate();
    const handleLoginSubmit = (e) => {
        e.preventDefault();
      
        const csharp_Item = Csharp_data.filter((c) => c.loginname === loginformData.loginname && c.password === loginformData.password);

        if (csharp_Item.length === 0) {
            const php_Item = PHP_data.filter((p) => p.loginname === loginformData.loginname && p.password === loginformData.password);

            if (php_Item.length === 0) {
                setLoginSuccess(false);
                alert("Login Fail");
            }
            else {
               setLoginSuccess(true);
                alert("login Success!");
                navigate('/')
            }
        }
        else {
            setLoginSuccess(true);
             navigate('/')
        }
    }
    const handleLogout=()=>{
       setLoginSuccess(false);
    }
  return (
    <div className='page-container'>
       {loginSuccess === false ? <Login onChange={onLoginChange} handleLoginSubmit={handleLoginSubmit} /> : <Suspense fallback={<div>Loading...</div>}>
      <div className='content-wrap'>         
        <Navbar handleLogout={handleLogout}> </Navbar>
        <Logoimage> </Logoimage>        
       <div className='main-sidebar'>
        <div className='sidebar-left'>
        <Sidebar></Sidebar>
        </div>
        <div className='sidebar-right'>          
            <Routes>
            <Route exact path="/"  element={<Home/>}></Route>
            <Route  path="/About" element={<About/>}></Route>
            <Route  path="/ckmgroups" element={<Ckmgroups/>}></Route>
            <Route  path="/SystemTeam" element={<SystemTeam/>}></Route>
            <Route  path="/CSharp" element={<Csharp/>}></Route>
             <Route  path="/PHP" element={<PHP/>}></Route>
            <Route  path="/ReactTeam" element={<ReactTeam/>}></Route>
            </Routes>
        </div>
       </div>
      </div>
      <Footer></Footer>
      </Suspense>
      }
      </div>
  
  );
}

export default App;
