import React from 'react';
import {Link} from 'react-router-dom';
import classs from 'classnames';
import './css/create.css';


class createnewuser extends React.Component{

createnew(name,pass){
 //database
let id=0;
return ({msg:'successfully created new user'},{uid:id});
}


render(){
let paramas={name:'sow',password:'ddd'};
let a=this.createnew(paramas.name,paramas.password);
return(
<div classs='tyu'>
<label classs='uuid'>a</label>

<Link classs='gothr' to='/dashboard' params={{uid:a.uid},{selector:'products'}}>
GO to dashboard</Link>
</div>

);
}

}
export default createnewuser;