import React from 'react';
import Validateuser from './validateuser.js';
import {Link} from 'react-router-dom';
import className from 'classnames';
import './css/login.css';


class login extends React.Component
{
render(){
return(
    <>    
<div className='container'>
 username<input className='useri' id='loginame' type='text'/>

           password <input className='useri' id='password' type='text' />
<Link to="/validateuser" className='log02' params={{username:document.getElementById('loginame')},{password:document.getElementById('password')}}>Login</Link>
</div></>);}
}
export default login;