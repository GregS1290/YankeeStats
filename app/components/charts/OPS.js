import React from 'react';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryLegend,
} from 'victory';

class OPS extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 id='linegraphname'>
          Yankees OPS By Year
          <small className='text-muted'> vs MLB avg</small>
        </h1>

        <VictoryChart
          height={200}
          width={350}
          theme={VictoryTheme.material}
          maxDomain={{ y: 0.85 }}
        >
          <VictoryLegend
            x={125}
            y={10}
            orientation='horizontal'
            gutter={20}
            style={{ border: { stroke: 'black' } }}
            colorScale={['#173161', '#ad1010']}
            data={[{ name: 'Yankees' }, { name: 'MLB' }]}
          />
          <VictoryLine
            style={{
              data: { stroke: '#173161' },
              parent: { border: '1px solid #ccc' },
            }}
            data={[
              { x: `'16`, y: 0.72 },
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
              { x: `'16`, y: 0.739 },
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

export default OPS;
