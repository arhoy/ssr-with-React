import React from 'react';

const Home = () => {
  return (
    <div className="red">
      The HOME page
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
export default {
  component: Home
};
