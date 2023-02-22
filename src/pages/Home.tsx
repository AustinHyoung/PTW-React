import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/board">
        <div>MAIN</div>
      </Link>
    </div>
  );
};

export default Home;
