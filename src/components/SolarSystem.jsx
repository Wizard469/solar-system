import React, { Component } from 'react';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
