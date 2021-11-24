import React from 'react';
import {Link} from 'react-router-dom';
import classs from 'classnames';
import './css/create.css';


class createnewuser extends React.Component{

createnew(name,pass){
 //database
  

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();
let id=this.props.cname+this.props.cage;
client.query('insert into users values(id,this.props.cname,this.props.cphone,this.props.cage,this.props.cpass)', (err, res) => {
  if (err){return({msg:'something went wrong'});
            throw err;}
 return ({msg:'successfully created new user'},{uid:id});
  client.end();
});





}


render(){
let paramas={name:'sow',password:'ddd'};
let a=this.createnew(paramas.name,paramas.password);
return(
<div classs='tyu'>
<label classs='uuid'>{a.msg}</label>

<Link classs='gothr' to='/dashboard' params={{uid:a.uid},{selector:'products'}}>
GO to dashboard</Link>
</div>

);
}

}
export default createnewuser;