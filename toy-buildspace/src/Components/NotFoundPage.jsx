import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{display: 'flex',flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
      <h1>404 - Not Found</h1>
      <h2>Seems like you are lost.</h2>
      <h4>it could be you. it could be us. but let's take you back home.</h4>
      <Link to={'/'} ><button style={{backgroundColor: 'black', border: 'white solid 2px',borderRadius: '100px', padding: '10px 18px', fontSize: '18px', cursor: 'pointer', color: 'white'}}>Home</button></Link>
    </div>
  );
};

export default NotFoundPage;
