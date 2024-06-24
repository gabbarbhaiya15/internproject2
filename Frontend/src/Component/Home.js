import React, { useState, useEffect } from 'react';
import Alluser from './Alluser';
import Selecteduser from './Selecteduser';
import '../Style/Home.css'; // Ensure to create this CSS file

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="selecteduser-container">
            <h2 className="section-heading">Selected Users</h2>
            <Selecteduser />
          </div>
          <div className="alluser-container">
            <h2 className="section-heading">All Users</h2>
            <Alluser />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
