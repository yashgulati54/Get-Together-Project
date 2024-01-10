import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'

const Header = () => {

    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle">

                <Link to="/" className="logo">
                    <h1 className="navbar-brand  p-0 m-0"
                    onClick={() => window.scrollTo({top: 0})}>
                        <span style={{ fontWeight: 'bold', color: 'black' }}>Get</span>
                        <span style={{ fontWeight: 'bold', color: '#00BFFF' }}>Together</span>
                    </h1>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header
