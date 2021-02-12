import React, { useState } from 'react';
import Form from '../components/Form/Form';
import TotalPowerConsumption from '../containers/ElectricalLoad/TotalPowerConsumption';
import { Container } from 'react-bootstrap';
import './panel.css';

const ElectricalLoad = () => {
  return (
    <div className="electricalLoad__main" >
      <h1>Power Consumption Calculator</h1>
      <Form />

      <TotalPowerConsumption /> 
    </div>
  );
};
export default ElectricalLoad;
