import React from 'react'
import './WidgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from './../../Datas'

export default function WidgetSm() {
    return (
        <div className='widgetContainer'>
            <h3 className='widgetTitle'>New Join Members</h3>
            <ul className="widgetList">
                {newMembers.map(memeber => (
                    <li className="widgetListItem">
                        <img src={memeber.img} className="widgetSmImg" />
                        <div className='widgetSmUser'>
                            <span className="widgetSmUserName">
                                {memeber.userName}
                            </span>
                            <span className="widgetSmTitle">{memeber.userTitle}</span>
                        </div>
                        <button className="widgetSmBtn">
                            <VisibilityIcon className='widgetSmIcon' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
