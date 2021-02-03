import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';
import PanelInput from './PanelInput';
import {
  capacityofPanelCalculation,
  sizeofInverterCalculation,
  stringofPanelCalculation,
  panelinEachStringCalculation,
  totalNoofPanel,
} from '../../containers/ElectricalLoad/calculation/SolarPanel/PanelSizingCalculation';

const PanelMain = () => {
  // const filter = useSelector(state => state.filter)
  const dispatch = useDispatch();

  const panelSizing = useSelector((state) => state.panelSizing);

  let sizeofPanel, KWh, totalLoad;
  let sizeofInverter = { watt: '', VA: '' };

  let consumptionData = useLocation();
  console.log('PanelMain', panelSizing);

  if (consumptionData.state !== undefined) {
    KWh = (consumptionData.state.totalWattsHoursPerDay * 30) / 1000;
    totalLoad = consumptionData.state.totalWatts;
    dispatch({
      type: 'UPDATE_SOLAR',
      obj: { name: 'KWh', value: KWh },
    });
    dispatch({
      type: 'UPDATE_SOLAR',
      obj: { name: 'totalLoad', value: totalLoad },
    });

    // setTest('test');
    console.log('undefined', consumptionData.state);
  }
  sizeofPanel = capacityofPanelCalculation(
    panelSizing.hours,
    panelSizing.KWh,
    panelSizing.solarLooseWiringConnectionFactor
  );
  sizeofInverter = sizeofInverterCalculation(
    panelSizing.totalLoad,
    panelSizing.solarLooseWiringConnectionFactor,
    panelSizing.inverterEfficiency,
    panelSizing.inverterPowerFactor
  );

  let noofPanelinEachString = panelinEachStringCalculation(
    panelSizing.systemVoltage,
    panelSizing.voltageofPanel
  );
  let numberofStringofPanel = stringofPanelCalculation(
    sizeofPanel,
    panelSizing.capacityofPanel
  );
  let totalNoofSolarPanels = totalNoofPanel(
    noofPanelinEachString,
    numberofStringofPanel
  );

  console.log('calculation', sizeofPanel, KWh);
  return (
    <div>
      <PanelInput panelSizing={panelSizing} consumptionData={consumptionData} />
      <tr>
        <td>Total size of panel(W)</td>
        <td>: {sizeofPanel}</td>
      </tr>

      <tr>
        <td>No of String of Solar Panel </td>
        {<td>: {noofPanelinEachString} No’s</td>}
      </tr>
      <tr>
        <td>No of String of Solar Panel </td>
        {<td>: {numberofStringofPanel} No’s</td>}
      </tr>
      <tr>
        <td>Total No of Solar Panel </td>
        {<td>: {totalNoofSolarPanels} No’s</td>}
      </tr>
      <tr>
        <td>Size of Inverter </td>
        {
          <td>
            : {sizeofInverter.watt} watt or {sizeofInverter.VA} VA
          </td>
        }
      </tr>
    </div>
  );
};

export default PanelMain;
