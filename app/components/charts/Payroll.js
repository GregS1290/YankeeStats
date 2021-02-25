import React from 'react';
import { VictoryStack, VictoryBar, VictoryLegend } from 'victory';

class Payroll extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 id='linegraphname'>
          Yankees Payroll
          <small className='text-muted'> vs other AL Opponents</small>
        </h1>
        <VictoryStack colorScale={['#64b8e8', 'grey', '#d4662a', '#173161']}>
          <VictoryBar
            data={[
              { x: 'a', y: 69 },
              { x: 'b', y: 99 },
              { x: 'c', y: 124 },
              { x: 'd', y: 201 },
            ]}
          />
          <VictoryBar
            data={[
              { x: 'a', y: 68 },
              { x: 'b', y: 71 },
              { x: 'c', y: 163 },
              { x: 'd', y: 180 },
            ]}
          />
          <VictoryBar
            data={[
              { x: 'a', y: 64 },
              { x: 'b', y: 91 },
              { x: 'c', y: 168 },
              { x: 'd', y: 223 },
            ]}
          />
          <VictoryBar
            data={[
              { x: 'a', y: 28 },
              { x: 'b', y: 53 },
              { x: 'c', y: 85 },
              { x: 'd', y: 111 },
            ]}
          />
        </VictoryStack>
      </div>
    );
  }
}

export default Payroll;
