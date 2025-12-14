import React from 'react'
import './TopBar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

export default function TopBar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topbarLogo'>
          <span className='logo'>My Dashboard</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconsContainer'>
            <NotificationsIcon />
            <span className='topIconbadge'>2</span>
          </div>
          <div className='topbarIconsContainer'>
            <LanguageIcon />
            <span className='topIconbadge'>2</span>
          </div>
          <div className='topbarIconsContainer'>
            <SettingsIcon/>
          </div>
          <img className='adminImage' src={`${process.env.PUBLIC_URL}/adminImages/admin2.png`}/>
        </div>
      </div>
    </div>
  )
}
