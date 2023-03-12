import React from "react";
import Producttable from "../Producttable/Producttable";
import Searchbar from "../Searchbar/Searchbar";
import './Filtrable.css'
function Filtrable() {
return (
<div className="Filtrable">
    <Searchbar></Searchbar>
    <Producttable></Producttable>
</div>
);
}


export default Filtrable