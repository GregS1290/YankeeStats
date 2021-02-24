import React from 'react';
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from 'victory';

// const data = [
//   { year: 2017, OPS: 0.785 },
//   { year: 2018, OPS: 0.781 },
//   { year: 2019, OPS: 0.829 },
//   { year: 2020, OPS: 0.789 },
// ];

class Team extends React.Component {
  render() {
    return (
      <div classname='container'>
        <h1 id='linegraphname'>
          Yankees OPS By Year
          <small classname='text-muted'> vs MLB avg</small>
        </h1>

        <VictoryChart height={200} width={350} theme={VictoryTheme.material}>
          <VictoryLine
            style={{
              data: { stroke: 'rgb(23, 49, 97)' },
              parent: { border: '1px solid #ccc' },
            }}
            data={[
              { x: `'17`, y: 0.785 },
              { x: `'18`, y: 0.781 },
              { x: `'19`, y: 0.829 },
              { x: `'20`, y: 0.789 },
            ]}
          />
          <VictoryLine
            style={{
              data: { stroke: '#ad1010' },
              parent: { border: '1px solid #ccc' },
            }}
            data={[
              { x: `'17`, y: 0.75 },
              { x: `'18`, y: 0.728 },
              { x: `'19`, y: 0.758 },
              { x: `'20`, y: 0.74 },
            ]}
          />
        </VictoryChart>
        <h5>Help </h5>
      </div>
    );
  }
}

export default Team;
