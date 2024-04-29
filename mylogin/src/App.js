import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const[username, setUsername] = useState("");
  const[pass, setPass]=useState("");
  const[match, setMatch]= useState(false);
  const[authentic, setAuthentic] = useState("");

  const handleForm = (e) =>{
    e.preventDefault();
    if(username === "user" && pass === "password" ){
      setMatch(true);
      setAuthentic("");
    }else{
      setMatch(false);
      setAuthentic("Invalid username or password");
    }
  }

  
  return (
    <div className="App">
      <h1>Login Page</h1>
      {authentic && <p>{authentic}</p>}
      {match ? <h1>Welcome, user!</h1>:<form onSubmit={handleForm}>
        <div>
          <label>Username:
            <input type='text' placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>


          </label><br></br>
          <label>Password:
            <input type='text' placeholder="password" value={pass} onChange={(e)=>setPass(e.target.value)} required/>


          </label><br></br>
          <button type='submit'>Submit</button>
          
        </div>
        </form>}
    </div>
  );
}

export default App;
