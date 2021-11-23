import React,{useState} from 'react';
import className from 'classnames';
import {Link} from 'react-router-dom';
import './css/signin.css';
import Createnewuser from './createnewuser.js';
const Signname =(props) => 

 {
const[color, setColor] = useState('');
 let state={green:"black"};
function constructor(){state={green:"black"};}
function handlechange(ev){
let value=ev.target.value;
const letter=/[A-Za-z]/;
if(value.match(letter)){returned(true);
props.submit({index:'name',cvalue:value});
} else returned(false);
}
 function returned(v){
if(v){ state={green:'green'}; setColor('leaf');}
else {state={green:'red'};setColor('rose');}
}

return(
<input type='text' onChange={handlechange} className={color}/>)

}




const Signno= (props) => {
const[color, setColor] = useState('');
var green='white';
function handlechange(ev){
let value=ev.target.value;
const letter=/[0-9]/;
if(value.match(letter) && value.length==10) {
returned(true);
props.submit({index:'phone',cvalue:value});} else returned(false);
}
function returned(v){
if(v){green='green'; setColor('leaf');}
else{green='red';setColor('rose');}
}


return(<input type='text' onChange={handlechange} className={color} color={green}/>);
}




 const Password=(props) => {
const[color, setColor] = useState('');
var green='white';
function handlechange(ev){

let value=ev.target.value;
const letter=/[A-Za-z]/;const digit=/[0-9]/;
if(value.match(letter) && value.match(digit)){ returned(true);
props.submit({index:'pass',cvalue:value});} else returned(false);
}
function returned(v){
if(v){green='green';setColor('leaf');}
else{green='red';setColor('rose');}
}


return(<input type='password' className={color}  onChange={handlechange} style={{color:`{green}`}}/>)
}




 const Signage =(props) => {
const[color, setColor] = useState('');
var green='white';
function handlechange(ev){
let value=ev.target.value;
const letter=/[^A-Za-z]/;const digit=/[0-9]/;
if(value.match(letter) && value.match(digit) && value.length<3) 
{props.submit({index:'age',cvalue:value});returned(true);} else returned(false);
}
function returned(v){
if(v){green='green';setColor('leaf');}
else{green='red';setColor('rose');}
}


return(<input type='text' onChange={handlechange} className={color} color={green}/>)
}

 class signin extends React.Component{

constructor(){

super();
  this.submitrelease=false,this.name='',this.pass='',this.age='',this.phone='';
this.state={hider:'hidded'};
}
 sethider(v){this.setState({hider:v});}
submit(value){
   
 switch(value.index){
case 'name':{this.name=value.cvalue};
 case 'phone':{this.phone=value.cvalue};
case 'age':{this.age=value.cvalue}; 
case 'pass':{this.pass=value.cvalue};
}
if(this.name!=null && this.phone!=null && this.age!=null && this.pass!=null)
{
 this.sethider('visibled');
}
else this.sethider('hidded');
}

render(){
/*let Signname=this.Signname();
let Signage=this.Signage();
let Password=this.Password();
let Signno=this.Signno();*/
   return(
<div className='ert'>
  <label className='inlab' >username</label>
<Signname submit={this.submit}/>
<br/>
<label className='inlab'>phoneno</label>
<Signno submit={this.submit}/>
<br/>
<label className='inlab'>age</label>
<Signage submit={this.submit}/>
<br/>
<label className='inlab'>password</label>
<Password submit={this.submit}/>
<small>has digits and letters</small>
<br/>
<Link to='/createnewuser' className={this.state.hider} params={{cname:this.name},{cage:this.age},{cpass:this.pass},{cphone:this.phone}}>Create</Link>
</div>
);

}
vlis(){

}
}
export default signin


