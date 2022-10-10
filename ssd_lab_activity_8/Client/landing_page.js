import "../common.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BACKEND_URI = "http://localhost:3007/login/";

// functional component
function Student(props) {

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/student/addQuery');
    }

    return (<form>
        <button type="button" onClick={navigateToProfile}> Add Query </button>
    </form>);
}

export default Student;