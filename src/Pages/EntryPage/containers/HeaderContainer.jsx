import React from 'react'
import '../../../css/entryHeader.css'
import Logo from '../components/Logo'
import Login from '../components/Login'

const HeaderContainer = () => {
    return (
        <header className="entry-header">
            <Logo />
            <Login />
        </header>
    )
}

export default HeaderContainer
