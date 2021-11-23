import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Upnavigation from './upnavigation.js';
import Display from './display.js';
import './css/dashboard.css';
import classs from 'classnames';

class dashboard extends Component{

constructor(props)
{
   super(props);
   this.state={selector:'products'};
this.chagestate=this.chagestate.bind(this);
}

chagestate(choose)
{
   this.setState({selector:choose});
console.log('state of display',this.state.selector);
}

render(){
 return<><Upnavigation classs='navigator' chagestate={this.chagestate} {...this.props}  />
<br/>
<div>{this.state.selector}</div>
<Display {...this.props} classs='display' selector={this.state.selector} /></>;
}

}
export default dashboard;