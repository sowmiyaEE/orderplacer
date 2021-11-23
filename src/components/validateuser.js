import React from "react";
import Dashboard from "./dashboard.js";
class validateuser extends React.Component{
constructor(props){
super(props);
this.agree=this.validation();
this.uid=0;
}
validation(){
this.uid=2;
return true;}
render(){
if(this.agree){
return(<Dashboard uid={this.uid}/>);
}
else{
return(
<div >incorrect credentials</div>
);
}
}

}

export default validateuser;