import React, { useState } from 'react';
import Form from '../components/Form/Form';
import TotalPowerConsumption from '../containers/ElectricalLoad/TotalPowerConsumption';
import { Container } from 'react-bootstrap';
import './panel.css';

const ElectricalLoad = () => {
  return (
    <Container className="electricalLoad__main" fluid="md">
      <h1>Power Consumption Calculator</h1>
      <Form />

      <TotalPowerConsumption />
    </Container>
  );
};
export default ElectricalLoad;
