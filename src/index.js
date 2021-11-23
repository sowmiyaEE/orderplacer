import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import React from 'react';
//import App from './App.js';
import Createnewuser from './components/createnewuser.js';
import Dashboard from './components/dashboard.js';
import Signin from './components/signin.js';
import Admin from './components/admin.js';
import Validateuser from './components/validateuser.js';
import Login from './components/login.js';
import classNams from 'classnames';
import './components/css/index.css';

import{BrowserRouter as  Router,Routes,Route,Redirect} from 'react-router-dom';
class Aapp extends React.Component
{
render(){
return(
    <><Router><div className="hess">
<h1>Orderer</h1>
              <Link to="/login" className='log02'>Login</Link>   
       <Link to="/signin" className='log02'>signin</Link>   
       <Link to="/admin" className='log02'>Admin</Link>
 </div> 
 <br/><br/>
<Routes>
<Route  path="/createnewuser" element={<Createnewuser/>}/>
<Route  path="/signin" element={<Signin/>}/>
<Route  path="/dashboard" element={<Dashboard/>}/> 
<Route path="/admin" element={<Admin/>}/>
<Route path="/validateuser" element={<Validateuser/>}/>
<Route path="/login" element={<Login/>}/>
</Routes>

</Router>
    

</>);
}
}
ReactDOM.render(<Aapp />,document.getElementById('app'));