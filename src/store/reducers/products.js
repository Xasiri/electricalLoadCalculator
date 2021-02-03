import produce from "immer"
import {applianceData} from '../../components/Form/applianceData'


function table(state = [
                  {name:'CFL BULB-60-WATT EQUIVALENT',qty:'10',watts:'18',hours:'6',id:'100'},
                  {name:'COFFEE MACHINE',qty:'1',watts:'1000',hours:'0.2',id:'101'},
                  {name:'FRIDGE-20 CU.FT.(AC)',qty:'1',watts:'353',hours:'4',id:'102'},
                  {name:'MICROWAVE',qty:'1',watts:'1000',hours:'0.3',id:'103'},
                  {name:'TOASTER OVEN',qty:'1',watts:'1200',hours:'0.2',id:'104'},
                  {name:'TV-LCD',qty:'1',watts:'150',hours:'3',id:'105'},
                  {name:'FREEZER-CHEST-15 CU.FT',qty:'1',watts:'270',hours:'4',id:'106'},
                  {name:'VACUUM',qty:'1',watts:'1000',hours:'1',id:'107'},
                  {name:'LAPTOP',qty:'1',watts:'100',hours:'4',id:'108'},
                  {name:'ROUTER',qty:'1',watts:'7',hours:'24',id:'109'},
                  {name:'MODEM',qty:'1',watts:'7',hours:'24',id:'110'},
                  {name:'SMART PHONE-RECHARGE',qty:'1',watts:'6',hours:'3',id:'111'},
                  {name:'',qty:'',watts:'',hours:'',id:'112'} 
                        ], action) {
  switch(action.type){
  case "ADD_PRODUCT": {
        console.log('table-action.obj', action.obj)
      return state.concat([action.obj])
  } 
  case "DELETE_PRODUCT": {
    let index = state.findIndex(p => p.id === action.id);
    
   console.log('delete-product-state', index,state)
    return [...state.filter(p => p.id !== action.id)]

  } 
  case "UPDATE_PRODUCT": {
    console.log('Update Product', state)
    console.log('Action Obj',action.obj)
    let applianceIndex, itemID
    applianceData.map((appliance,index)=> {
      if(appliance.name === action.obj.value){
        applianceIndex = index 
        itemID = action.obj.id
        console.log('[APLLIANCE DATA]',appliance,applianceIndex, itemID)
      }
      }
    )
    return produce(state, draftState => { 
      console.log('state',state)
      draftState.map((item) =>{
        // console.log('update product1',item,action.obj.name)

        if(item.id === action.obj.id && action.obj.name){
          console.log('update product2',item,action.obj.value)
          item[action.obj.name] = action.obj.value
        }
          else if(item.id === itemID){
                 //  applianceData[index]
              item.name = applianceData[applianceIndex].name
              item.qty = applianceData[applianceIndex].qty
              item.watts = applianceData[applianceIndex].watts
              item.hours = applianceData[applianceIndex].hours
            console.log('AGAIN',applianceIndex)
          }
        }
      )}
     )
      
      
  }
  default:
    return state;
  }
}
  export default table;