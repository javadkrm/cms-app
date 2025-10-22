import React from 'react'
import './WidgetLg.css'

import { transActions } from '../../Datas'

export default function WidgetLg() {

  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }
  return (
    <div className='widgetLgContainer'>
      <h3 className='widgetLgTitle'>Latest TransActions</h3>
      <table className='widgetLgTable'>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {transActions.map(ta => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img className='widgetLgUserImg' src={ta.img} alt="" />
              <span className='widgetLgUserData'>{ta.name}</span>
            </td>
            <td className="widgetLgDate">
              <span className='widgetLgUserData'>{ta.date}</span>
            </td>
            <td className="widgetLgAmount">
              <span className='widgetLgUserData'>{ta.amount}</span>
            </td>
            <td className="widgetLgStatus">
              <Button type={ta.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}
