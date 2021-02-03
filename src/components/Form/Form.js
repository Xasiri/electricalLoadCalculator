import React from 'react';
import { useSelector } from 'react-redux';
import ProductTable from './ProductTable';

const Form = () => {
  const filter = useSelector((state) => state.filter);
  const table = useSelector((state) => state.table);

  return <ProductTable products={table} filterText={filter} />;
};

export default Form;
