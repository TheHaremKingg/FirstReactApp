import React from "react";
import "./Producttable.css";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";
const Producttable = () => {
  return(
  <div className="Producttable">
  <ProductCategoryRow/>
  <ProductRow/>
  </div>)
};
export default Producttable;
