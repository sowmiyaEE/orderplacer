import React from 'react';
import Orders from './orders.js';
import classs from 'classnames';
import './css/admin.css';
class admin extends React.Component{
constructor(){super();this.rtext='ok';}
addproduct()
{
let pid=1,src='',rate='',des='';
let element=document.getElementById('racediv');
if(element.children[0].value!=null && element.children[1].value!=null && element.children[2].value!=null)
{
src=element.children[0].value;
rate=element.children[1].value;
des=element.children[2].value;
pid=src+rate;
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('insert into table values($1,$2,$3,$4)',[pid,src,rate,des], (err, res) => {
  if (err) {
alert('could not perform');
throw err;
this.rtext='something went wrong,try giving all values';
}
 else{

element.children[0].value='';
element.children[1].value='';
element.children[2].value='';
this.rtext='ok';
alert('added '+src+'to products!'); 

}
  client.end();
});

}
else{
this.rtext='something went wrong,try giving all values';}


console.log(element.children[0].value,
element.children[1].value,
element.children[2].value,
);



}

render(){
return(
<div classs='tyu'>
ORDERS
   <Orders uid={'*'}/>
ADD PRODUCT
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