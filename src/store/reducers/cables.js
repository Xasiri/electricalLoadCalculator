function cables(state = [], action) {
  switch(action.type){
  case "ADD_CABLE": {
        console.log('Cables-reducer', action.obj)
      return state.concat([action.obj])
  } 
  case "DELETE_CABLE": {
    let index = state.findIndex(p => p.id === action.id);
    
   console.log('delete-product-state', index,state)
    return [...state.filter(p => p.id !== action.id)]

  } 
  case "UPDATE_CABLE": {
    console.log('update product', state)

    return state.map((todo, index, arr) => {
      if (arr[index].id.toString() === action.obj.id) {
        let obj = {};
        obj[action.obj.name] = action.obj.value;
        return Object.assign({}, todo, obj);
      }
      return todo
    })

  }
  default:
    return state;
  }
}
  export default cables;