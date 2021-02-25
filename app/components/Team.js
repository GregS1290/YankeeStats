import React from 'react';
import OPS from './charts/OPS';
import WHIP from './charts/WHIP';
import Payroll from './charts/Payroll';

const Team = () => {
  return (
    <React.Fragment>
      <div>
        <OPS />
      </div>
      <div>
        <WHIP />
      </div>
      <div>
        <Payroll />
      </div>
    </React.Fragment>
  );
};

export default Team;
