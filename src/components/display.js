import React from 'react';
import {Link} from 'react-router-dom';
import Orders from './orders.js';
import Products from './products.js';
class display extends React.Component{
 constructor(props){
   super(props);
   //this.state={selector:this.props.selector};
}
   render(){  
   switch(this.props.selector){
case 'orders':{return <Orders uid={this.props.uid}/> };
case 'products':{return<Products uid={this.props.uid}  />};
case 'Default':{return <div>something went wrong in choosing display</div>;}
}

}
}export default  display;