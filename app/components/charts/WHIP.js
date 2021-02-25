import React from 'react';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryLegend,
} from 'victory';

class WHIP extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 id='linegraphname'>
          Yankees WHIP By Year
          <small className='text-muted'> vs other AL Opponents</small>
        </h1>

        <VictoryChart
          height={200}
          width={350}
          theme={VictoryTheme.material}
          maxDomain={{ y: 1.45 }}
          minDomain={{ y: 1.1 }}
        >
          <VictoryLegend
            x={10}
            y={9}
            orientation='horizontal'
            gutter={20}
            style={{ border: { stroke: 'black' } }}
            colorScale={['#173161', '#d4662a', '#64b8e8', 'grey']}
            data={[
              { name: 'Yankees' },
              { name: 'Astros' },
              { name: 'Rays' },
              { name: 'White Sox' },
            ]}
          />
          <VictoryLine
            style={{
              //Yankees
              data: { stroke: '#173161' },
              parent: { border: '1px solid #ccc' },
            }}
            data={[
              { x: `'16`, y: 1.262 },
              { x: `'17`, y: 1.209 },
              { x: `'18`, y: 1.239 },
              { x: `'19`, y: 1.304 },
              { x: `'20`, y: 1.244 },
            ]}
          />
          <VictoryLine
            style={{
              //Astros
              data: { stroke: '#d4662a' },
              parent: { border: '1px solid #ccc' },
            }}
            data={[
              { x: `'16`, y: 1.29 },
              { x: `'17`, y: 1.27 },
              { x: `'18`, y: 1.099 },
              { x: `'19`, y: 1.13 },
              { x: `'20`, y: 1.315 },
            ]}
          />
          <VictoryLine
            style={{
              //Rays
              data: { stroke: '#64b8e8' },
              parent: { border: '1px solid #ccc' },
            }}
            data={[
              { x: `'16`, y: 1.322 },
              { x: `'17`, y: 1.264 },
              { x: `'18`, y: 1.199 },
              { x: `'19`, y: 1.171 },
              { x: `'20`, y: 1.219 },
            ]}
          />
          <VictoryLine
            style={{
              //White Sox
              data: { stroke: 'grey' },
              parent: { border: '1px solid #ccc' },
            }}
            data={[
              { x: `'16`, y: 1.343 },
              { x: `'17`, y: 1.418 },
              { x: `'18`, y: 1.431 },
              { x: `'19`, y: 1.43 },
              { x: `'20`, y: 1.262 },
            ]}
          />
        </VictoryChart>
        <h5>Help </h5>
      </div>
    );
  }
}

export default WHIP;
