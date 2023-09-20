import React from 'react'
import MainSidebar from './MainSidebar'
import { Outlet } from 'react-router-dom'

export default function HomeLayout() {
    return (
        <div className='loggedContainer'>
            <MainSidebar />
            <Outlet />
        </div>
    )
}
