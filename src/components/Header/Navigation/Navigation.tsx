import React from 'react';
import {Nav} from "./style";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";

const Navigation = () => {

    return (

        <Nav>
            <Logo/>
            <Search/>
        </Nav>
    )

}

export default Navigation
