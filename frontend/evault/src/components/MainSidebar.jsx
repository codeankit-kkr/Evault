import React from 'react'

import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Button } from '@mui/material';



export default function MainSidebar() {


    return (
        <>

            <div className="sidebar">

                <button className="sidebar_option">My Profile</button>
                <button className="sidebar_option">Folder</button>
                <button className="sidebar_option">Shared Folders</button>
                <button className="sidebar_option">Help & FAQ</button>
                <button className="sidebar_option">Log Out</button>


            </div>
        </>

    )
}
