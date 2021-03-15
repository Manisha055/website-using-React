import React from 'react'
import SidebarRow from "./SidebarRow";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeIcon from '@material-ui/icons/Home';
import LockIcon from '@material-ui/icons/Lock';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Dashboard"/>


            <SidebarRow Icon={SupervisorAccountIcon} title="Administration"/>


            <SidebarRow Icon={LockIcon} title="Role Management"/>
            

            <SidebarRow Icon={PermIdentityIcon} title="Employee"/>
       
        </div>
    )
}

export default Sidebar
