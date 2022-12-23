import React, {useState} from 'react';
import './dropdown.scss';
import {Link} from 'react-router-dom';

function Dropdown(props) {
    const [click, setClick] = useState(true);
    const {menuArray} = props;

    const handleClick = () => setClick(!click);

    return (
        <>
        <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<span onclick="openNav()">open</span>

<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
<div id="main">
  ...
</div>
        </>
    );
}

export default Dropdown;
