import React from 'react';
import createnewuser from 'components/createnewuser.js';


class signin extends React.Component{
constructor(){submitrelease=false;name='';pass='';age'';phone=''}
class signname {
handlechange(ev){
let value=ev.target.value;
const letter=/[A-Za-z]/;
if(value.match(letter)){returned(true);name=v} else retured(false);
}
returned(v){
if(v){this.green='green';submitrelease=true;}
else{this.green='red';submitrelease=false;}
}

render(){
return<input type='text' onChange={this.handlechange} color={this.green}/>
}}

class signno {
handlechange(ev){
let value=ev.target.value;
const letter=/[0-9]/;
if(value.match(letter) && value.length==10) {phone=value;returned(true);} else retured(false);
}
returned(v){
if(v){this.green='green';submitrelease=true;}
else{this.green='red';submitrelease=false;}
}

render(){
return<input type='text' onChange={this.handlechange} color={this.green}/>
}}

class password {
handlechange(ev){
let value=ev.target.value;
const letter=/[A-Za-z]/;const digit=/[0-9]/;
if(value.match(letter) && value.match(digit)){ returned(true);pass=value;} else retured(false);
}
returned(v){
if(v){this.green='green';submitrelease=true;}
else{this.green='red';submitrelease=false;}
}

render(){
return<input type='password' onChange={this.handlechange} color={this.green}/>
}}

class signage {
handlechange(ev){
let value=ev.target.value;
const letter=/[^A-Za-z]/;const digit=/[0-9]/;
if(value.match(letter) && value.match(digit) && value.length<3) {age=value;returned(true);} else retured(false);
}
returned(v){
if(v){this.green='green';submitrelease=true;}
else{this.green='red';submitrelease=false;}
}

render(){
return <input type='text' onChange={this.handlechange} color={this.green}/>
}}
render(){
   return(
  <>
  <label>username</label>
  <signname/>

  <label>phoneno</label>
  <signno/>

  <label>age</label>
  <signage/>

  <label>password</label>
  <password/>
  <label>has digits and letters</label>
  <Link to='createnewuser' />
 </>
);

}

export default signin
}

