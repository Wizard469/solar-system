import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const missionsInfo = missions
      .map(({ name, year, country, destination }) => (
        <MissionCard
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
          key={ `${name}-${year}` }
        />
      ));

    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        <ul>
          <li>{ missionsInfo }</li>
        </ul>
      </div>
    );
  }
}

export default Missions;
