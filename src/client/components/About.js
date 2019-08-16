import React from 'react';

const About = () => {
  return (
    <div className="red">
      The About component
      <button
        className="btn btn-red"
        onClick={() => console.log('About about about!')}
      >
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
export default About;
