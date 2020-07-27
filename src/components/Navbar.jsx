import React, { Component } from 'react';

const Navbar = ({totalcounters})=>{

    return ( 
        <React.Fragment>
        <nav class="nav navbar navbar-light bg-light">
<a class="navbar-brand" href="#">RonyBhai
    <span className="badge badge-pill badge-secondary m-4"> {totalcounters}</span></a>
</nav>
</React.Fragment>
     );




};




 
export default Navbar;