import React from 'react';
class orders extends React.Component{
getorders(uid)   {
//data
let res=[{name:'order20',pid:344},{name:'Rewekka',pid:9009},{name:'William',pid:233}];
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT * from orders where uid=$1;', [uid],(err, res) => {
  if (err) throw err;
  return res.rows;
  client.end();

});

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