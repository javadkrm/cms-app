import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom';

import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailIcon from '@mui/icons-material/Mail';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MessageIcon from '@mui/icons-material/Message';
import WorkIcon from '@mui/icons-material/Work';
import ReportIcon from '@mui/icons-material/Report';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <Link to='/' className='link'>
              <li className='sidebarListItem active'>
                <HomeFilledIcon className='sidebarIcon' />
                Home
              </li>
            </Link>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <Link to='/users' className='link'>
              <li className='sidebarListItem active'>
                <GroupIcon className='sidebarIcon' />
                Users
              </li>
            </Link>
            <Link to='/newusers' className='link'>
              <li className='sidebarListItem link'>
                <PersonIcon className='sidebarIcon' />
                New Users
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li className='sidebarListItem link'>
                <StorefrontIcon className='sidebarIcon' />
                Products
              </li>
            </Link>
            <li className='sidebarListItem'>
              <AttachMoneyIcon className='sidebarIcon' />
              TransActions
            </li>
            <li className='sidebarListItem'>
              <BarChartIcon className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <MailIcon className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeedIcon className='sidebarIcon' />
              FeedBack
            </li>
            <li className='sidebarListItem'>
              <MessageIcon className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <WorkIcon className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <ReportIcon className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
