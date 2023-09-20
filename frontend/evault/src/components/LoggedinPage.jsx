import React from 'react'
import MainSidebar from './MainSidebar'
import RightContent from './RightContent'

export default function LoggedinPage() {
    return (
        <div className='loggedContainer'>
            <MainSidebar />
            <RightContent />
        </div>
    )
}
