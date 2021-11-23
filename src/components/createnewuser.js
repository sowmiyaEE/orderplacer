import React from 'react';
import {Link} from 'react-router-dom';




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

<label>a</label>

<Link to='/dashboard' params={{uid:a.uid},{selector:'products'}}>
GO to dashboard</Link>

);
}

}
export default createnewuser;