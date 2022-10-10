import "../common.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BACKEND_URI = "http://localhost:3007/api/";

// functional component
function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/landing_page');
    }

    return (
    <div className="center-div">
        <h1 className='text-center'>Login</h1>
        <form className='form-group'>
            <label className='m-2 form-label'>Roll No : </label>
            <br/>
            <input className='m-2 form-control' type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <label className='m-2 form-label'>Password : </label>
            <br/>
            <input className='m-2 form-control' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <label className='m-2 form-label'>Role : </label>
            <br/>
            <select id="role" type="text" name="role" value={role} onChange={(e) => setRole(e.target.value)} >
                <option value="student">Student</option>
                <option value="ta">Teaching Assistant</option>
            </select>

        </form>
        <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) =>  {
                // send fetch (POST) request to server
                const requestOptions = {
                    credentials : 'include',
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({ email : email, password : password })
                };

                var res = await fetch(BACKEND_URI + "login", requestOptions);
                alert((await res.json())["msg"]);
                setEmail("");
                setPassword("");
                setRole("");
                if(res.status == 200) {
                    sessionStorage.setItem("curr_email", email);
                    navigateToProfile();
                }
            }}>Login</button>
            <br/>
            <p className='m-4'>Do not have an account ? <Link to='/signup'> Sign Up Here</Link> </p> 
    </div>);
}

export default LoginForm;