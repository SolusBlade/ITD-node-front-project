import React from "react";
import Filters from './Filters';

const HeaderDashboard = ({ title }) => {
  return (
    <div className='header-dashboard'>
      <h1>{title}</h1>
      <Filters/>
    </div>
  );
};

export default HeaderDashboard;
