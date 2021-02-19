import React from "react";
import { useSelector } from "react-redux";
import ProductTable from "./ProductTable";
import CableTrayData from "../../containers/CableTray/CableTrayData";

const FormTray = () => {
  const filter = useSelector((state) => state.filter);
  const cables = useSelector((state) => state.cables);

  return (
    <>
      <ProductTable products={cables} filterText={filter} />
      <CableTrayData products={cables} />
    </>
  );
};

export default FormTray;
