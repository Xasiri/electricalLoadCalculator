import React from 'react';
import {useSelector} from 'react-redux'
import ProductTable from './ProductTable';

const Form = () => {
  const filter = useSelector(state => state.filter)
  const table = useSelector(state => state.table)
  console.log('APP-table',table)

  return (
    <div>
        <ProductTable products={table} filterText={filter}/>
      </div>
  );
}

export default Form