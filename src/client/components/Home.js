import React from 'react';
import UsersList from './UsersList';

const Home = () => {
  return (
    <div className="red">
      The HOME component
      <button className="btn btn-red" onClick={() => console.log('Hi there!')}>
        Press me now!
      </button>
      <style>{`
        .red {
          color:red
        }
      `}</style>
    </div>
  );
};
export default Home;
