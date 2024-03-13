import React from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
const Dashboard = () => {
  const data  = useParams();
  return (
    <div>
        <h1>{data.name} Welcome to Dashboard</h1>
        
        <Link to='/' >Home</Link>{' '}
        <Link to={`/About/${data.name}`} >About</Link>
    </div>
  );
};

export default Dashboard;