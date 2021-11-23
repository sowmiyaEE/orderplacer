import React from 'react';
class orders extends React.Component{
getorders(uid)   {
//data
let res=[{name:'order20',pid:344},{name:'Rewekka',pid:9009},{name:'William',pid:233}];
return(res);
}

render(){
    let queries=this.getorders(this.props.uid);
    return (
<ul>
{queries.map((query,i) =>{
return(<div key={i}>
 <li>
{query.name+"       "+query.pid}
</li></div>)})}</ul>
);
}
}export default  orders;