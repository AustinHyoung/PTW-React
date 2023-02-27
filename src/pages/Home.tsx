import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/reducer';

const Home = () => {
  const data = useSelector((state: RootState) => state.persistedReducer.data);
  console.log(data);
  return (
    <div style={{ backgroundColor: 'rgb(241, 242, 246)', height: '100%' }}>
      <Link to="/board">
        <div>MAIN</div>
      </Link>
    </div>
  );
};

export default Home;
