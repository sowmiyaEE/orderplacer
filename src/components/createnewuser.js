import React from 'react';
import {Link} from 'react-router-dom';
import classs from 'classnames';
import './css/create.css';


class createnewuser extends React.Component{

createnew(name,pass){
 //database
const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://nkkwpyccizwdsf:50269a422b86e5ddea3d4d366a4611e25948d85d5fe4a1e902bb0dcf3dd26e6b@ec2-52-54-23-130.compute-1.amazonaws.com:5432/ddf4gd8u37m2ag',
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