import React from 'react';
import Orders from './orders.js';
iport classs from classnames;
import './css/admin.css';
class admin extends React.Component{
constructor(){super();this.rtext='ok';}
addproduct()
{
let element=document.getElementById('racediv');
if(element!=null){

console.log(element.children[0].value,
element.children[1].value,
element.children[2].value,
);

if(true){
//data
element.children[0].value='';
element.children[1].value='';
element.children[2].value=''}
else{

}}

}

render(){
return(
<div classs='tyu'>
   <Orders uid={'*'}/>
   Add products<div id='racediv' >
      src<input type='text'/>
      rate<input type='text'/>
      descripto<input type='text'/>

<button onClick={this.addproduct}>ok</button>
  </div>
<label id='msg'>{this.rtext}</label>
</div>
   
);
}

}
export default admin;