import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
const Home = () => {

  const user = 'Phani'
  return (
    <div>
        <h1>Welcome to Home {user}</h1>
        <Link to={`/Dashboard/${user}`} >Dashboard</Link>{' '}
        <Link to={`/About/${user}`} >About</Link>
    </div>
  );
};

export default Home;