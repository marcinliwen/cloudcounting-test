import * as React from 'react';
import './layout.css';
import logo from '../images/cc-logo.png'

const Layout = ({children}) =>{
    return(
        <main>
            <header>
<img src={logo} />
            </header>
            {children}
        </main>
    )
}


export default Layout;