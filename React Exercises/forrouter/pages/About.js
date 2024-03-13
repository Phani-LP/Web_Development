import React from 'react';
import { Link, useParams } from 'react-router-dom';
const About = () => {
  const data = useParams();

  return (
    <div>
      <h1>{data.name} Welcome to About</h1>
      <Link to='/' >Home</Link>{' '}
      <Link to={`/Dashboard/${data.name}`} >Dashboard</Link>
    </div>
  );
};

export default About;