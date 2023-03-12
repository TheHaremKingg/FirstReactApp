import React from "react";

function Searchbar() {
return (
<div style= {{
    width :"100%",
    height:"30%",
    border:"1px solid blue",
    margin: "auto"
}}>
    <input type="text" placeholder="Search ..."/>
    <div>
    <input id="checkbox" type="checkbox"/>
    <label for="checkbox"> only show products in stock </label>
    
    </div>
    
</div>
);
}


export default Searchbar