import React,{useState} from 'react'
import TrayValidation from './TrayValidation'
import {cableCalculationHandler} from '../../containers/CableTray/calculation/TrayCalculation'
import {Button,Container,Col,Row,InputGroup,FormControl,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './paragraph.css'

const CableTrayData = ({products}) =>{
  const [trayData, setTrayData] = useState({
    width:'250', 
    height:'100',
    weight:'25',
    run:'1',
    layers:'1' 
  });
  const [isDataAvailable, setIsDataAvailable ] = useState(false);

  let cableDataArray = [...products]

  const traySizeHandler = (e, field) =>{
    const value = e.target.value;
    setTrayData({
      ...trayData,field:value
    })
  }

  const validationStateHandler=()=>{
    setIsDataAvailable(true)
  } 


  let cableCalculatedData = cableCalculationHandler(cableDataArray)

  return(
    <Container >  
      <Card> 
              <Row> 
              <Col >Size of Cable Tray(mm)</Col>
              <Col>
              <InputGroup className="mb-3 w-50">
                <InputGroup.Prepend>
                </InputGroup.Prepend>
                <FormControl onChange={(event) =>traySizeHandler(event,"width")} 
                  type="number" 
                            id="quantity" 
                            name="width" 
                            min="0" 
                            defaultValue='250'/>
                <FormControl 
                onChange={(event) =>traySizeHandler(event,"height")}
                type="number" 
                id="quantity" 
                name="height" 
                min="0" 
                defaultValue='100'/>
              </InputGroup>
              
              </Col>                 
              
              </Row>
              <Row className="mb-3">
              <Col>Weight of Cable Tray(Kg/mt)</Col>
              <Col>
             
                <FormControl className='w-50'  onChange={(event) =>traySizeHandler(event,"weight")}
                  type="number" 
                  id="quantity" 
                  name="weight" 
                  min="0" 
                  defaultValue='25'/>
             
              
              </Col>   
           
              </Row>

              <Row className="mb-3">
              <Col>No of Cable Tray Run</Col>
              <Col>
              <FormControl className='w-50'   onChange={(event) =>traySizeHandler(event,"run")}
                    type="number" 
                    id="quantity" 
                    name="run" 
                    min="0" 
                    defaultValue='1'/>             
              </Col>
              </Row>
<Row className="mb-3">
                <Col>No of layers of cables in Cable tray</Col>
                <Col>
                <FormControl className='w-50'   onChange={(event) =>traySizeHandler(event,"layers")}
                   type="number" 
                   id="quantity" 
                   name="layers" 
                   min="0"
                   defaultValue='1'/>   
               </Col>
</Row>

<Row className="mb-3"><Col> Check for Validation</Col></Row>
<Row><Col>
<Button onClick={() =>validationStateHandler()}>Check for validation</Button>
</Col>
</Row>
</Card>
{isDataAvailable && 
<Card>
  <TrayValidation
       trayData={trayData}
       cableCalculatedData={cableCalculatedData}  
  /></Card>}
  

     </Container>  )
}
export default CableTrayData