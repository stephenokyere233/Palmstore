// import { useContext } from "react";
// import { ApiContent } from "./ApiContext";
import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";

const Women = ({query}) => {
  // let women=`category/women's clothing`
  console.log(query);
  // const[query,setQuery]=useContext(ApiContent)
  // setQuery(prev=>prev+`category/women's clothing`)
  return (
    <div className="product">
      <ProductCard  />
      <Filter/>
    </div>
  );
};

export default Women;
// query={women}