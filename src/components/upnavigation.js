import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import className from 'classnames';
import './css/upnavigation.css';
class upnavigation extends React.Component{


c(){

}
co(){

}

   render(){
  return(
     <div className="container">
      <span className='log0'>{this.props.uid}</span>
<div className="twobutto">
     <span className="butto" onClick={()=> this.props.chagestate('products')}>   products     </span>
     <span className="butto" onClick={()=> this.props.chagestate('orders')}>   orders       </span>
</div>
    </div> );
      }
}
export default  upnavigation;