class redirection extends React.Component{

render(){
let name=this.props;
let password=this.props;

return (<><input id='loginame' type='text'/>
            <input id='password' type='text'/>
<a href='redirection' name=document.getElementById('loginame').value 
password=document.getElementById('password').value />login</>
);
}
}