import React from 'react';
import {Link} from 'react-router-dom';
import Product from './product.js';
import {classs} from 'classnames';
import './css/products.css';

class products extends React.Component{
   constructor(props)
{
   super(props);
this.props=props;
this.state={search:'*'};
}

getproducts(search){
//data   retur qury.src,qury,rate,query.description,query.pid

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT * from products where description like $1;', [search+'*'],(err, res) => {
  if (err) throw err;
  return res.rows;
  client.end();

});

console.log("query",search);
return [{src:'er.jpg',rate:'25',description:'eer jfkljddkjfsjdfk fkjd',pid:'23'}];
}

render(){
  let queries=this.getproducts(this.state.search);        
return(
<div>
<div classs='ser' align="center">
<input type='text' id='searchid' classs='qinput'/>
<button classs='search' onClick={() => this.setState({search:document.getElementById('searchid').value})}
>search</button></div>
<div style={{display:'flex',flexWrap:'wrap', paddingTop:'4px',
   marginTop:'0px',float:'left'}}>
{queries.map(
(query,i) => {
return(<div key={i} classs='singleproduct'>
<Product  src={query.src} rate={query.rate} description={query.description} pid={query.pid} uid={this.props.uid}/>
</div>)
}
)}

</div>
</div>)

}
}export default  products;