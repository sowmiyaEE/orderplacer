import React from "react";
import Dashboard from "./dashboard.js";
class validateuser extends React.Component{

constructor(props){
super(props);
this.agree=this.validation();
this.state={uid:0};
}

validation(){

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT uid from users where username=$1 AND password=$2;',[this.props.username,this.props.password],(err, res) => {
  if (err) return false;
  for (let row of res.rows) {
    this.setState({uid:row.uid});
return true;
  }
  client.end();
});


}
render(){
if(this.agree){
return(<Dashboard uid={this.state.uid}/>);
}
else{
return(
<div >incorrect credentials</div>
);
}
}

}

export default validateuser;