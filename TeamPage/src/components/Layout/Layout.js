import './Layout.css'

import MainCard from '../Cards/MainCard/MainCard'
import NavigationBar from '../NavigationBar/NavigationBar'
import React from 'react'

export const Layout = ({ children }) => {
    return (
        <div>
            <NavigationBar />
            <MainCard></MainCard>
            {children}
        </div>
    )
}

export default Layout