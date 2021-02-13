import React from 'react';
import FormTray from '../components/FormCableTray/FormTray'
import {Container,Card} from 'react-bootstrap'


const CableTray=() => {
 
  return (

    <div>
    <Card><Card.Header as='h5'>Tray Calculator</Card.Header></Card>
    <FormTray/>
    </div>
  );
}

export default CableTray;