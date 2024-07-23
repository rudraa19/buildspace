import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '3rem' }}>
      <div>
        <h1>404 - Not Found</h1>
        <h2>Seems like you are lost.</h2>
        <h4>It could be you. It could be us. But let's take you back home.</h4>
        <Link to={'/'} >
          <button style={{ backgroundColor: 'black', border: 'white solid 2px', borderRadius: '100px', padding: '10px 18px', fontSize: '18px', cursor: 'pointer', color: 'white' }}>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
