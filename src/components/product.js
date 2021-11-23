import React from 'react';
import {Link} from 'react-router-dom';
class product extends React.Component{
 constructor(props){
   super(props);
this.props=props;
this.name=this.props.name;
this.src=this.props.src;
this.rate=this.props.rate;
this.description=this.props.description;
this.uid=this.props.uid;
  }  
 render(){
return(
   
<div style={{width:'200px',height:'200px',width:'fixed',padding:'20px'}}>
 <img src={this.src} width="120px" height="120px" alt='image'/>
 <small>{this.description}</small>
 <label>{this.rate}</label>
 <small>{this.name}</small>
</div>


);          
  }
}export default  product;